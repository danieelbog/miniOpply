<template>
    <InputRawWrapper :text="'Password'" :isRequired="true">
        <input v-bind="password" type="password" class="form-control" id="inputPassword">
        <ErrorMessage :errorMessage="errors.password"></ErrorMessage>
    </InputRawWrapper>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useForm } from 'vee-validate';
import ErrorMessage from "../error-message.vue";
import InputRawWrapper from "@/components/layouts/wrappers/forms/row-wrapper.vue";
import * as yup from 'yup';

export default defineComponent({
    components: {
        ErrorMessage,
        InputRawWrapper
    },
    setup(props, context) {
        const { errors, defineInputBinds } = useForm({
            validationSchema: yup.object({
                password: yup.string()
                    .required()
                    .max(128, "Password must be 128 characters or fewer")
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
