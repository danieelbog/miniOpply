<template>
    <InputRawWrapper :text="'Username'" :isRequired="true">
        <input v-bind="username" type="username" class="form-control" id="inputUsername">
        <ErrorMessage :errorMessage="errors.username"></ErrorMessage>
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
                username: yup.string().required()
            }),
        });

        const username = defineInputBinds('username', {
            validateOnBlur: true
        });

        watch(username, async (newUsername) => {
            if (!errors.value.username)
                context.emit("usernameChanged", newUsername.value)
        })

        return {
            errors,
            username
        }
    }
})
</script>
