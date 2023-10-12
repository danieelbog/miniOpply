<template>
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4 mt-5">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        messages: {
            type: Array<String>,
            required: false,
            default: []
        },
        isErrorMessages: {
            type: Boolean,
            required: false,
            default: false
        }
    }
})
</script>