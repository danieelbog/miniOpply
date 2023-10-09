import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";
import routes from "../views";

var router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach(async (to, from, next) => {
	const authStore = useAuthStore();
	const allowAnonymous = to.matched.some((record) => record.meta.allowAnonymous);
	const loginQuery = { path: "/login", query: { redirect: to.fullPath } };

	if (!allowAnonymous && !authStore.isAuthenticated()) {
		authStore.getAuthTokenFromLocalStorage();
		if (authStore.isAuthenticated()) next();
		else next(loginQuery);
	} else next();
});

export default router;
