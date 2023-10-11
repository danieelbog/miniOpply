<template>
    <div v-if="supplier" class="row justify-content-center mb-5">
        <div class="col-lg-6 col-md-8 col-sm-10 col-12 text-center">
            <div class="card shadow-sm">
                <h5 class="card-header bg-white">{{ supplier.name }}</h5>
                <div class="card-body">
                    <p class="card-text">{{ supplier.description }}</p>
                    <router-link class="btn btn-primary" :to="'/supplier/' + supplier.id">Check supplier page</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ISupplier } from '@/src/types/ISupplier';
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        supplier: {
            type: Object as () => ISupplier,
            required: true
        }
    }
})
</script>