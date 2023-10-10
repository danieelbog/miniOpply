import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";
import { routes } from "@/views/index";

var router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach(async (to, from, next) => {
	const allowAnonymous = to.matched.some((record) => record.meta.allowAnonymous);
	const loginQuery = { path: "/login", query: { redirect: to.fullPath } };

	const authStore = useAuthStore();
	try {
		if (!allowAnonymous && !authStore.isAuthenticated()) {
			authStore.getAuthTokenFromLocalStorage();
			if (authStore.isAuthenticated()) next();
			else next(loginQuery);
		} else next();
	} catch (error) {
		console.error("The navigation to the page is not possible to reach", error);
		next(loginQuery);
	}
});

export default router;
