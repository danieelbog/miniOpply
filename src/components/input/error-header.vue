<template>
    <div v-if="errorMessages.length > 0" class="row justify-content-center">
        <div class="mt-5">
            <p v-for="errorMessage in errorMessages" class="text-danger text-center">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'

export default defineComponent({
    props: {
        errorMessages: {
            type: Array<String>,
            required: false,
            default: []
        }
    },
})
</script>