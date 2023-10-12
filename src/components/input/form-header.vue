<template>
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4 mt-5">
            <h2 class="text-center">{{ text }}</h2>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        text: {
            type: String,
            required: true
        }
    }
})
</script>