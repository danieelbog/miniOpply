<template>
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
            <div class="row">
                <div class="col-12 col-md-6 mb-2">
                    <router-link class="col-12 btn-block" to="/login">Or login</router-link>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <button @click="createUser" type="button" class="col-12 btn btn-primary btn-block"
                        :class="[formIsValid ? '' : 'disabled']">
                        Create user
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { api } from '@/src/api';
import { ICreateUser } from '@/src/types/ICreateUser';
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        username: {
            type: String,
            required: false,
            default: ""
        },
        password: {
            type: String,
            required: false,
            default: ""
        },
        firstName: {
            type: String,
            required: false,
            default: ""
        },
        lastName: {
            type: String,
            required: false,
            default: ""
        },
        email: {
            type: String,
            required: false,
            default: ""
        },
        formIsValid: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    setup(props, context) {
        const createUser = async () => {
            var createUser = {
                username: props.username,
                password: props.password,
                first_name: props.firstName,
                last_name: props.lastName,
                email: props.email
            } as ICreateUser

            try {
                api.post("/api/v1/users/", createUser)
                context.emit("userCreated", "User created succesfully")
            } catch (error: any) {
                context.emit("errorsOccured", (error as any).response?.username)
            }
        }

        return {
            createUser
        }
    }
})
</script>