<template>
    <form class="container">
        <ErrorHeader :errorMessages="errorMessages"></ErrorHeader>
        <LoginHeader></LoginHeader>
        <UsernameInput @usernameChanged="updateUsername"></UsernameInput>
        <PasswordInput @passwordChanged="updatePassword"></PasswordInput>
        <SubmitLogin @errorsOccured="updateErrorMessages" :username="username" :password="password"
            :formIsValid="formIsValid">
        </SubmitLogin>
    </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import ErrorHeader from "@/components/input/error-header.vue";
import LoginHeader from "@/components/input/login/login-header.vue"
import PasswordInput from "@/components/input/login/password-input.vue";
import UsernameInput from "@/components/input/login/username-input.vue";
import SubmitLogin from "@/components/input/login/submit-login.vue";

export default defineComponent({
    components: {
        ErrorHeader,
        LoginHeader,
        UsernameInput,
        PasswordInput,
        SubmitLogin
    },
    setup() {
        const inputUsername = ref("");
        const updateUsername = (value: string) => {
            inputUsername.value = value
        }
        const username = computed(() => {
            return inputUsername.value;
        })

        const inputPassword = ref("");
        const updatePassword = (value: string) => {
            inputPassword.value = value;
        }
        const password = computed(() => {
            return inputPassword.value;
        })

        const formIsValid = computed(() => {
            return inputUsername.value.length > 0 &&
                inputPassword.value.length > 0;
        })

        const inputErrorMessages = ref([] as Array<string>);
        const updateErrorMessages = (value: Array<string>) => {
            inputErrorMessages.value = value;
        }
        const errorMessages = computed(() => {
            return inputErrorMessages.value;
        })

        return {
            username,
            updateUsername,
            password,
            updatePassword,
            formIsValid,
            updateErrorMessages,
            errorMessages
        }
    }
})
</script>