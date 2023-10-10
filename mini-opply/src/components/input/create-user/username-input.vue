<template>
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
            <div class="form-group">
                <div class="mb-3">
                    <label for="inputUsername" class="form-label">
                        Username
                        <span class="text-danger">*</span>
                    </label>
                    <input v-bind="username" type="username" class="form-control" id="inputUsername">
                    <ErrorMessage :errorMessage="errors.username"></ErrorMessage>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useForm } from 'vee-validate';
import ErrorMessage from "../error-message.vue";
import * as yup from 'yup';

export default defineComponent({
    components: {
        ErrorMessage
    },
    setup(props, context) {
        const { errors, defineInputBinds } = useForm({
            validationSchema: yup.object({
                username: yup.string()
                    .required()
                    .max(150, "Username must be 150 characters or fewer")
                    .matches(/^[\w.@+-]+$/, "Allowed pattern: Letters, digits and @/./+/-/_ only")
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
