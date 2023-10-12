<template>
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
            <div class="form-group">
                <div class="mb-3">
                    <RowInputLabel :text="text" :isRequired="isRequired"></RowInputLabel>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RowInputLabel from "./labels/row-input-label.vue";

export default defineComponent({
    components: {
        RowInputLabel
    },
    props: {
        text: {
            type: String,
            required: true
        },
        isRequired: {
            type: Boolean,
            required: false,
            default: false
        }
    }
})
</script>

<style scoped></style>