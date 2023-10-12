<template>
    <InputRawWrapper :text="'First name'">
        <input v-bind="firstName" type="text" class="form-control" id="inputFirstName">
        <ErrorMessage :errorMessage="errors.firstName"></ErrorMessage>
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
                firstName: yup.string()
                    .max(150, "First Name must be 150 characters or fewer")
            }),
        });

        const firstName = defineInputBinds('firstName', {
            validateOnBlur: true
        });

        watch(firstName, async (newFirstName) => {
            if (!errors.value.firstName)
                context.emit("firstNameChanged", newFirstName.value)
        })

        return {
            errors,
            firstName
        }
    }
})
</script>
