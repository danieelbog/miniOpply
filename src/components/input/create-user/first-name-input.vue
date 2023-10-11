<template>
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
            <div class="form-group">
                <div class="mb-3">
                    <label for="inputFirstName" class="form-label">
                        First Name
                    </label>
                    <input v-bind="firstName" type="text" class="form-control" id="inputFirstName">
                    <ErrorMessage :errorMessage="errors.firstName"></ErrorMessage>
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
                firstName: yup.string()
                    .max(150, "First Name must be 150 characters or fewer")
            }),
        });

        const firstName = defineInputBinds('firstName', {
            validateOnBlur: true
        });

        watch(firstName, async (newFirstName) => {
            if (!errors.value.firstName)
                context.emit("firstNameChanged", newFirstName.value)
        })

        return {
            errors,
            firstName
        }
    }
})
</script>
