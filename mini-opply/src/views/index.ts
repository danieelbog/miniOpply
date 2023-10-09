const routes = [
	{
		path: "/login",
		name: "Login",
		meta: {
			allowAnonymous: true,
			noLayout: true,
			pageTitle: "MiniOpply | Login",
		},
		component: () => import("./Login/login.vue"),
	},
	{
		path: "/register",
		name: "Register",
		meta: {
			allowAnonymous: true,
			noLayout: true,
			pageTitle: "MiniOpply | Register",
		},
		component: () => import("./Register/register.vue"),
	},
	{
		path: "/",
		name: "Suppliers",
		meta: {
			allowAnonymous: false,
			noLayout: false,
			pageTitle: "MiniOpply | Suppliers",
		},
		component: () => import("./Supplier/supplier.vue"),
	},
	{
		path: "/supplier",
		name: "Supplier",
		meta: {
			allowAnonymous: false,
			noLayout: false,
			pageTitle: "MiniOpply | Supplier",
		},
		component: () => import("./Supplier/supplier.vue"),
	},
	{
		path: "/quotes",
		name: "Quotes",
		meta: {
			allowAnonymous: false,
			noLayout: false,
			pageTitle: "MiniOpply | Quotes",
		},
		component: () => import("./Quotes/quotes.vue"),
	},
];

export default routes;
