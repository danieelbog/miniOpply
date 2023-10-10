<template>
    <div v-if="successMessage.length" class="row justify-content-center">
        <div class="mt-5">
            <p class="text-success text-center">{{ successMessage }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'

export default defineComponent({
    props: {
        successMessage: {
            type: String,
            required: false,
            default: ""
        }
    },
})
</script>