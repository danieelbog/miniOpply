<template>
    <main>
        <component :is="layoutComponent"></component>
    </main>
</template>

<script lang="ts">
import { computed, defineComponent, defineAsyncComponent, onMounted } from 'vue';
import router from '@/router/index';
import { Popover } from "bootstrap";

export default defineComponent({
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