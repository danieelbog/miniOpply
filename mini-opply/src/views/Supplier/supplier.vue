<template>
    <div>
        <Loader v-if="!supplier"></Loader>
        <ErrorHeader v-if="!supplier" :errorMessages="errorMessages" />
        <ImageSupplierCard v-else :supplier="supplier" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { ISupplier } from '@/src/types/ISupplier';
import { api } from '@/src/api';

import Loader from "@/components/layouts/loader/loader.vue";
import ErrorHeader from '@/components/input/error-header.vue';
import ImageSupplierCard from '@/components/cards/supplier/image-supplier-card.vue';
import router from '@/src/router';

export default defineComponent({
    components: {
        Loader,
        ErrorHeader,
        ImageSupplierCard,
    },
    setup() {
        const supplier = ref<ISupplier | null>(null);
        const errorMessages = ref<string[]>([]);

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
            }
        };

        onMounted(loadSupplier);

        return {
            supplier,
            errorMessages,
        };
    },
});
</script>
  