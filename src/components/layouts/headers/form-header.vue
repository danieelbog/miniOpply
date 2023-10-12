<template>
    <RowHeaderWrapper>
        <h2 v-if="headerTitle.length > 0" class="text-center">{{ headerTitle }}</h2>
        <ul v-if="messages.length > 0">
            <li v-for="errorMessage in messages" class="text-center"
                :class="[applyErrorStyle ? 'text-danger' : 'text-success']">
                {{ errorMessage }}
            </li>
        </ul>
        <slot></slot>
    </RowHeaderWrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import RowHeaderWrapper from "@/components/layouts/wrappers/forms/row-header-wrapper.vue"

export default defineComponent({
    components: {
        RowHeaderWrapper
    },
    props: {
        messages: {
            type: Array<String>,
            required: true
        },
        applyErrorStyle: {
            type: Boolean,
            required: false,
            default: false
        },
        headerTitle: {
            type: String,
            required: false,
            default: ""
        }
    }
})
</script>