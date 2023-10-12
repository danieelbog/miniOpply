<template>
    <form class="container">
        <RowHeaderWrapper :headerTitle="'Create User'" :messages="displayMessages" :applyErrorStyle="showError()">
        </RowHeaderWrapper>
        <UsernameInput @usernameChanged="updateInputField('username', $event)"></UsernameInput>
        <PasswordInput @passwordChanged="updateInputField('password', $event)"></PasswordInput>
        <FirstNameInput @firstNameChanged="updateInputField('firstName', $event)"></FirstNameInput>
        <LastNameInput @lastNameChanged="updateInputField('lastName', $event)"></LastNameInput>
        <EmailInput @emailChanged="updateInputField('email', $event)"></EmailInput>
        <SubmitCreateUser @userCreated="updateSuccessMessage" @errorsOccured="updateErrorMessages"
            :username="formData.username" :password="formData.password" :firstName="formData.firsName"
            :lastName="formData.lastName" :email="formData.email" :formIsValid="formIsValid">
        </SubmitCreateUser>
    </form>
</template>
  
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import RowHeaderWrapper from "@/components/input/headers/form-header.vue";
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
        RowHeaderWrapper,
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

        const errorMessages = ref([] as Array<string>);
        const updateErrorMessages = (value: Array<string>) => {
            errorMessages.value = [];
            errorMessages.value = value;
        };

        const successMessages = ref([] as Array<string>);
        const updateSuccessMessage = (value: string) => {
            successMessages.value = [];
            successMessages.value.push(value);
        };

        const showError = () => {
            return errorMessages.value.length > 0;
        }
        const displayMessages = computed(() => {
            return showError() ? errorMessages.value : successMessages.value;
        });

        return {
            formData,
            showError,
            updateInputField,
            updateErrorMessages,
            updateSuccessMessage,
            errorMessages,
            displayMessages,
            formIsValid
        };
    }
});
</script>