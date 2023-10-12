<template>
    <form class="container">
        <RowHeaderWrapper :headerTitle="'Create User'" :messages="errorMessages" :applyErrorStyle="true">
        </RowHeaderWrapper>
        <UsernameInput @usernameChanged="updateInputField('username', $event)"></UsernameInput>
        <PasswordInput @passwordChanged="updateInputField('password', $event)"></PasswordInput>
        <SubmitLogin @errorsOccured="updateErrorMessages" :username="formData.username" :password="formData.password"
            :formIsValid="formIsValid">
        </SubmitLogin>
    </form>
</template>
  
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import RowHeaderWrapper from "@/components/layouts/wrappers/forms/row-header-wrapper.vue";
import PasswordInput from "@/components/input/login/password-input.vue";
import UsernameInput from "@/components/input/login/username-input.vue";
import SubmitLogin from "@/components/input/login/submit-login.vue";

interface FormData {
    username: string;
    password: string;
}

export default defineComponent({
    components: {
        RowHeaderWrapper,
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

        const errorMessages = ref([] as Array<string>);
        const updateErrorMessages = (value: Array<string>) => {
            errorMessages.value = value;
        };

        return {
            formData,
            updateInputField,
            formIsValid,
            updateErrorMessages,
            errorMessages
        };
    }
});
</script>
  