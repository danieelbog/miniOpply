<template>
    <InputRawWrapper :text="'Email'">
        <input v-bind="email" type="email" class="form-control" id="inputEmail">
        <ErrorMessage :errorMessage="errors.email"></ErrorMessage>
    </InputRawWrapper>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useForm } from 'vee-validate';
import InputRawWrapper from "../wrappers/row-wrapper.vue";
import ErrorMessage from "../error-message.vue";
import * as yup from 'yup';

export default defineComponent({
    components: {
        ErrorMessage,
        InputRawWrapper
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
