<template>
    <div>
        <div>
            <button @click="login" class="btn btn-primary">Login</button>
            <button @click="logout" class="btn btn-danger">logout</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '@/src/stores/auth.store';
import { IAuthToken } from '@/src/types/IAuthToken';
import router from '@/src/router';

export default defineComponent({
    setup() {

        const authStore = useAuthStore();
        const login = async () => {
            const authToken = {
                username: "danielbgd",
                password: "P@ssw0rd"
            } as IAuthToken;
            await authStore.getAuthToken(authToken)
            if (authStore.isAuthenticated) loginRedirect();
        }

        const logout = () => {
            authStore.logout();
        }

        function loginRedirect() {
            router.push({ path: router.currentRoute.value.query.redirect as string ?? "/" });
        }

        return {
            login,
            logout
        }
    }
})
</script>