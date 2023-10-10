<template>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
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