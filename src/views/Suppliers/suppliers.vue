<template>
    <RowHeaderWrapper v-if="errorMessages.length > 0" :messages="errorMessages" :applyErrorStyle="true">
    </RowHeaderWrapper>
    <ObservableInfiniteScrollWrapper v-else @intersect="loadSuppliers" :showObservable="showObservable">
        <template v-slot:content>
            <div v-for="supplier in suppliers" :key="supplier.id">
                <SupplierCard :supplier="supplier" />
            </div>
        </template>
    </ObservableInfiniteScrollWrapper>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { ISupplier } from "@/src/types/ISupplier";
import { api } from "@/src/api";

import RowHeaderWrapper from "@/components/input/headers/form-header.vue";
import ObservableInfiniteScrollWrapper from "@/components/wrappers/observable-infinite-scroll-wrapper.vue";
import SupplierCard from "@/components/cards/supplier/supplier-card.vue";

export default defineComponent({
    components: {
        RowHeaderWrapper,
        ObservableInfiniteScrollWrapper,
        SupplierCard,
    },
    setup() {
        const suppliers = ref<ISupplier[]>([]);
        const nextPage = ref(1);
        const showObservable = ref(true);
        const errorMessages = ref<string[]>([]);

        const loadSuppliers = async () => {
            if (!showObservable.value) return;

            try {
                const response = await api.get(`/api/v1/suppliers/?page=${nextPage.value}`);
                if (response.data) {
                    const newSuppliers = response.data.results;
                    suppliers.value = suppliers.value.concat(newSuppliers);
                    setNextPage(response.data.next);
                }
            } catch (error) {
                const statusText = (error as any).response?.statusText;
                errorMessages.value = [statusText];
            }
        };

        const setNextPage = (url?: string) => {
            const match = url ? url.match(/page=(\d+)/) : null;
            if (match) {
                nextPage.value = parseInt(match[1], 10);
            } else {
                showObservable.value = false;
            }
        };

        onMounted(loadSuppliers);

        return {
            suppliers,
            loadSuppliers,
            errorMessages,
            showObservable,
        };
    },
});
</script>
  