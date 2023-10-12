<template>
    <form class="container">
        <RowHeaderWrapper :headerTitle="'Create User'" :messages="displayMessages" :applyErrorStyle="showError()">
        </RowHeaderWrapper>
        <TextInput label="Username" field="username" inputId="inputUsername" :isRequired="true"
            :validationSchema="usernameValidationSchemaCreate" @usernameChanged="updateInputField('username', $event)">
        </TextInput>
        <TextInput label="Password" field="password" inputId="inputPassword" :isRequired="true"
            :validationSchema="passwordValidationSchemaCreate" @passwordChanged="updateInputField('password', $event)">
        </TextInput>
        <TextInput label="First Name" field="firstName" inputId="inputFirstName"
            :validationSchema="passwordValidationSchemaCreate" @firstNameChanged="updateInputField('firstName', $event)">
        </TextInput>
        <TextInput label="Last Name" field="lastName" inputId="inputLastName"
            :validationSchema="passwordValidationSchemaCreate" @lastNameChanged="updateInputField('lastName', $event)">
        </TextInput>
        <TextInput label="Email" field="email" inputId="inputEmail" :validationSchema="emailValidationSchemaCreate"
            @emailChanged="updateInputField('email', $event)">
        </TextInput>
        <SubmitCreateUser @userCreated="updateSuccessMessage" @errorsOccured="updateErrorMessages"
            :username="formData.username" :password="formData.password" :firstName="formData.firsName"
            :lastName="formData.lastName" :email="formData.email" :formIsValid="formIsValid">
        </SubmitCreateUser>
    </form>
</template>
  
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { usernameValidationSchemaCreate } from "@/types/validations/username-schema";
import { passwordValidationSchemaCreate } from "@/types/validations/password-schema";
import { firstNameValidationSchemaCreate } from "@/types/validations/first-name-schema";
import { lastNameValidationSchemaCreate } from "@/types/validations/last-name-schema";
import { emailValidationSchemaCreate } from "@/types/validations/email-schema";


import RowHeaderWrapper from "@/components/layouts/headers/form-header.vue";
import TextInput from "@/components/input/text-input.vue";
import SubmitCreateUser from "@/components/input/create-user/submit-create-user.vue";

interface FormData {
    [key: string]: string;
}


export default defineComponent({
    components: {
        RowHeaderWrapper,
        TextInput,
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
            showError,
            updateInputField,
            updateErrorMessages,
            updateSuccessMessage,
            formData,
            errorMessages,
            displayMessages,
            formIsValid,
            usernameValidationSchemaCreate,
            passwordValidationSchemaCreate,
            firstNameValidationSchemaCreate,
            lastNameValidationSchemaCreate,
            emailValidationSchemaCreate
        };
    }
});
</script>