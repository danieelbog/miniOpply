<template>
    <InputRawWrapper :text="'Last name'">
        <input v-bind="lastName" type="text" class="form-control" id="inputLastName">
        <ErrorMessage :errorMessage="errors.lastName"></ErrorMessage>
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
                lastName: yup.string()
                    .max(150, "Last Name must be 150 characters or fewer")
            }),
        });

        const lastName = defineInputBinds('lastName', {
            validateOnBlur: true
        });

        watch(lastName, async (newLastName) => {
            if (!errors.value.lastName)
                context.emit("lastNameChanged", newLastName.value)
        })

        return {
            errors,
            lastName
        }
    }
})
</script>
