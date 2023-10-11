<template>
    <main class="bg-light h-100">
        <component :is="layoutComponent"></component>
        <ScrollToTop></ScrollToTop>
    </main>
</template>

<script lang="ts">
import { computed, defineComponent, defineAsyncComponent, onMounted } from 'vue';
import { Popover } from "bootstrap";
import router from '@/router/index';
import ScrollToTop from "@/components/wrappers/scroll-to-top/scroll-to-top.vue"

export default defineComponent({
    components: {
        ScrollToTop
    },
    setup() {
        const layoutComponent = computed(() => {
            return router.currentRoute.value.meta?.noLayout
                ? defineAsyncComponent(() => import("@/components/layouts/empty-layout.vue"))
                : defineAsyncComponent(() => import("@/components/layouts/default-layout.vue"))
        })

        onMounted(() => {
            document.querySelectorAll('[data-bs-toggle="popover"]')
                .forEach(popover => {
                    new Popover(popover)
                })
        })

        return {
            layoutComponent
        }
    }
})
</script>