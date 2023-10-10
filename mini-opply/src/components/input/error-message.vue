<template>
    <span v-if="errorMessage" class="fst-italic fw-lighter text-danger">{{ errorMessage }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        errorMessage: {
            type: String,
            required: false,
            default: null
        }
    },
    setup() {
        return {}
    }
})
</script>