<template>
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
            <div class="form-group">
                <div class="mb-3">
                    <label for="inputLastName" class="form-label">
                        Last Name
                    </label>
                    <input v-bind="lastName" type="text" class="form-control" id="inputLastName">
                    <ErrorMessage :errorMessage="errors.lastName"></ErrorMessage>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useForm } from 'vee-validate';
import ErrorMessage from "../error-message.vue";
import * as yup from 'yup';

export default defineComponent({
    components: {
        ErrorMessage
    },
    setup(props, context) {
        const { errors, defineInputBinds } = useForm({
            validationSchema: yup.object({
                lastName: yup.string()
                    .max(150, "Last Name must be 150 characters or fewer")
            }),
        });

        const lastName = defineInputBinds('lastName', {
            validateOnBlur: true
        });

        watch(lastName, async (newLastName) => {
            if (!errors.value.lastName)
                context.emit("lastNameChanged", newLastName.value)
        })

        return {
            errors,
            lastName
        }
    }
})
</script>
