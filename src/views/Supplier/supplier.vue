<template>
    <RowHeaderWrapper v-if="!supplier" :messages="errorMessages" :applyErrorStyle="true">
        <Loader v-if="showLoader"></Loader>
    </RowHeaderWrapper>
    <ImageSupplierCard v-else :supplier="supplier" />
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { ISupplier } from '@/src/types/ISupplier';
import { api } from '@/src/api';


import Loader from "@/components/layouts/loader/loader.vue";
import RowHeaderWrapper from "@/components/layouts/wrappers/forms/row-header-wrapper.vue";
import ImageSupplierCard from '@/components/cards/supplier/image-supplier-card.vue';
import router from '@/src/router';

export default defineComponent({
    components: {
        Loader,
        RowHeaderWrapper,
        ImageSupplierCard,
    },
    setup() {
        const supplier = ref<ISupplier | null>(null);
        const errorMessages = ref<string[]>([]);
        const showLoader = ref(true);

        const loadSupplier = async () => {
            try {
                const supplierId = router.currentRoute.value.params.supplierId;
                if (!supplierId) {
                    throw new Error('Supplier was not found');
                }

                const response = await api.get(`/api/v1/suppliers/${supplierId}/`);
                if (response.data) {
                    supplier.value = response.data;
                }
            } catch (error) {
                const statusText = (error as any).response?.statusText;
                errorMessages.value = [statusText];
            } finally {
                showLoader.value = false;
            }
        };

        onMounted(loadSupplier);

        return {
            supplier,
            errorMessages,
            showLoader
        };
    },
});
</script>
  