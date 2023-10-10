<template>
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
            <div class="form-group">
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">
                        First Name
                    </label>
                    <input v-bind="email" type="email" class="form-control" id="inputEmail">
                    <ErrorMessage :errorMessage="errors.email"></ErrorMessage>
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
                email: yup.string()
                    .max(150, "Email must be 254 characters or fewer")
                    .matches(/^[\w\.-]+@[\w\.-]+\.\w+$/, "Provide a valid email")
            }),
        });

        const email = defineInputBinds('email', {
            validateOnBlur: true
        });

        watch(email, async (newEmail) => {
            if (!errors.value.email)
                context.emit("emailChanged", newEmail.value)
        })

        return {
            errors,
            email
        }
    }
})
</script>
