<template>
    <div>
        <ErrorHeader v-if="errorMessages.length > 0" :errorMessages="errorMessages" />
        <ObservableInfiniteScrollWrapper v-else @intersect="loadQuotes" :showObservable="showObservable">
            <template v-slot:content>
                <div v-for="quote in quotes" :key="quote.id">
                    <QuoteCard :quote="quote" />
                </div>
            </template>
        </ObservableInfiniteScrollWrapper>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { IQuote } from "@/src/types/IQuote";
import { api } from "@/src/api";

import ErrorHeader from "@/components/input/error-header.vue";
import ObservableInfiniteScrollWrapper from "@/components/wrappers/observable-infinite-scroll-wrapper.vue";
import QuoteCard from "@/components/cards/quote/quote-card.vue";

export default defineComponent({
    components: {
        ErrorHeader,
        ObservableInfiniteScrollWrapper,
        QuoteCard,
    },
    setup() {
        const quotes = ref<IQuote[]>([]);
        const nextPage = ref(1);
        const showObservable = ref(true);
        const errorMessages = ref<string[]>([]);

        const loadQuotes = async () => {
            if (!showObservable.value) return;

            try {
                const response = await api.get(`/api/v1/quotes/?page=${nextPage.value}`);
                if (response.data) {
                    const newQuotes = response.data.results;
                    quotes.value = quotes.value.concat(newQuotes);
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

        onMounted(loadQuotes);

        return {
            quotes,
            loadQuotes,
            errorMessages,
            showObservable,
        };
    },
});
</script>
  