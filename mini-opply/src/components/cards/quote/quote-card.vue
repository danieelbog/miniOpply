<template>
    <div class="row justify-content-center w-100 g-0 p-3">
        <div class="col-lg-6 col-md-8 col-sm-10 col-12 text-center">
            <div class="card text-center">
                <div class="card-header">
                    {{ quote.title }}
                </div>
                <div class="card-body">
                    <h5 class="card-title">Ammount: {{ quote.amount }}</h5>
                    <p class="card-text">Quote Id: {{ quote.id }}</p>
                    <router-link class="btn btn-primary" :to="'/supplier/' + quote.supplier_id">Check supplier
                        page</router-link>
                </div>
                <div class="card-footer text-muted">
                    {{ formatDate(new Date(quote.created)) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { IQuote } from '@/src/types/IQuote';
import { defineComponent } from 'vue'
import { options } from "@/types/utils/date-options";

export default defineComponent({
    props: {
        quote: {
            type: Object as () => IQuote,
            required: true
        }
    },
    setup(props) {
        const formatDate = (date: Date) => {
            return date.toLocaleDateString("en-US", options);
        }

        return {
            formatDate
        }
    }
})
</script>