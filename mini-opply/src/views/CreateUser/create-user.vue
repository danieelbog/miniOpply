<template>
    <form class="container">
        <SuccessMessage :successMessage="successMessage"></SuccessMessage>
        <ErrorHeader :errorMessages="errorMessages"></ErrorHeader>
        <CreateUserHeader></CreateUserHeader>
        <UsernameInput @usernameChanged="updateInputField('username', $event)"></UsernameInput>
        <PasswordInput @passwordChanged="updateInputField('password', $event)"></PasswordInput>
        <FirstNameInput @firstNameChanged="updateInputField('firstName', $event)"></FirstNameInput>
        <LastNameInput @lastNameChanged="updateInputField('lastName', $event)"></LastNameInput>
        <EmailInput @emailChanged="updateInputField('email', $event)"></EmailInput>
        <SubmitCreateUser @userCreated="updateSuccessMessage" @errorsOccured="updateErrorMessages"
            :username="formData.username" :password="formData.password" :firstName="formData.firsName"
            :lastName="formData.lastName" :email="formData.email" :formIsValid="formIsValid"></SubmitCreateUser>
    </form>
</template>
  
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import SuccessMessage from "@/components/input/success-header.vue";
import ErrorHeader from "@/components/input/error-header.vue";
import CreateUserHeader from "@/components/input/create-user/create-user-header.vue";
import UsernameInput from "@/components/input/create-user/username-input.vue";
import PasswordInput from "@/components/input/create-user/password-input.vue";
import FirstNameInput from "@/components/input/create-user/first-name-input.vue";
import LastNameInput from "@/components/input/create-user/last-name-input.vue";
import EmailInput from "@/components/input/create-user/email-input.vue";
import SubmitCreateUser from "@/components/input/create-user/submit-create-user.vue";

interface FormData {
    [key: string]: string;
}


export default defineComponent({
    components: {
        SuccessMessage,
        ErrorHeader,
        CreateUserHeader,
        UsernameInput,
        PasswordInput,
        FirstNameInput,
        LastNameInput,
        EmailInput,
        SubmitCreateUser
    },
    setup() {
        const formData = ref({
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
        } as FormData);

        const updateInputField = (field: string, value: string) => {
            formData.value[field] = value;
        };

        const formIsValid = computed(() => {
            return (
                formData.value.username.length > 0 && formData.value.password.length > 0
            );
        });

        const inputErrorMessages = ref([] as Array<string>);
        const updateErrorMessages = (value: Array<string>) => {
            inputErrorMessages.value = value;
        };

        const inputSuccessMessage = ref("");
        const updateSuccessMessage = (value: string) => {
            inputSuccessMessage.value = value;
        };

        return {
            formData,
            updateInputField,
            errorMessages: inputErrorMessages,
            updateErrorMessages,
            successMessage: inputSuccessMessage,
            updateSuccessMessage,
            formIsValid
        };
    }
});
</script>