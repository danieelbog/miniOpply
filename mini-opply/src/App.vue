<template>
    <main>
        <div class="d-grid justify-content-center">
            <router-link to="/">Go to Home</router-link>
            <router-link to="/quotes">Go to quotes</router-link>
            <router-link to="/supplier">Go to supplier</router-link>
            <router-link to="/register">Go to register</router-link>
            <router-link to="/login">Go to login</router-link>
        </div>
        <router-view></router-view>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
})
</script>