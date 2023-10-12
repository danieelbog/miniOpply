<template>
    <div class="row justify-content-center g-0 p-3">
        <div class="card shadow mb-4">
            <div class="card-body text-center">
                <img :src="'https://robohash.org/' + supplier.id" alt="avatar" class="rounded-circle img-fluid"
                    style="width: 150px;">
                <h5 class="my-3">{{ supplier.name }}</h5>
                <p class="text-muted mb-1">{{ supplier.description }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ISupplier } from '@/src/types/ISupplier';

export default defineComponent({
    props: {
        supplier: {
            type: Object as () => ISupplier,
            required: true
        }
    }
})
</script>