<template>
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
            <div class="form-group">
                <div class="mb-3">
                    <label for="inputPassword" class="form-label">
                        Password
                        <span class="text-danger">*</span>
                    </label>
                    <input v-bind="password" type="password" class="form-control" id="inputPassword">
                    <ErrorMessage :errorMessage="errors.password"></ErrorMessage>
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
                password: yup.string().required()
            }),
        });

        const password = defineInputBinds('password', {
            validateOnBlur: true
        });

        watch(password, async (newPassword) => {
            if (!errors.value.password)
                context.emit("passwordChanged", newPassword.value)
        })

        return {
            errors,
            password,
        }
    }
})
</script>
