<template>
    <form class="container">
        <ErrorHeader :errorMessages="errorMessages"></ErrorHeader>
        <FromHeader :text="'Login'"></FromHeader>
        <UsernameInput @usernameChanged="updateInputField('username', $event)"></UsernameInput>
        <PasswordInput @passwordChanged="updateInputField('password', $event)"></PasswordInput>
        <SubmitLogin @errorsOccured="updateErrorMessages" :username="formData.username" :password="formData.password"
            :formIsValid="formIsValid">
        </SubmitLogin>
    </form>
</template>
  
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import ErrorHeader from "@/components/input/error-header.vue";
import FromHeader from "@/components/input/form-header.vue"
import PasswordInput from "@/components/input/login/password-input.vue";
import UsernameInput from "@/components/input/login/username-input.vue";
import SubmitLogin from "@/components/input/login/submit-login.vue";

interface FormData {
    username: string;
    password: string;
}

export default defineComponent({
    components: {
        ErrorHeader,
        FromHeader,
        UsernameInput,
        PasswordInput,
        SubmitLogin
    },
    setup() {
        const formData = ref({
            username: "",
            password: ""
        } as FormData);

        const updateInputField = (field: keyof FormData, value: string) => {
            formData.value[field] = value;
        };

        const formIsValid = computed(() => {
            return formData.value.username.length > 0 && formData.value.password.length > 0;
        });

        const inputErrorMessages = ref([] as Array<string>);
        const updateErrorMessages = (value: Array<string>) => {
            inputErrorMessages.value = value;
        };

        return {
            formData,
            updateInputField,
            formIsValid,
            updateErrorMessages,
            errorMessages: inputErrorMessages
        };
    }
});
</script>
  