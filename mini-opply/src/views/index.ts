import { IRouteMeta } from "@/router/types";
import { RouteRecordRaw } from "vue-router";

export const routes = [
	{
		path: "/login",
		name: "Login",
		meta: {
			allowAnonymous: true,
			noLayout: true,
			pageTitle: "MiniOpply | Login",
		} as IRouteMeta,
		component: () => import("./Login/login.vue"),
	} as RouteRecordRaw,
	{
		path: "/create-user",
		name: "Create User",
		meta: {
			allowAnonymous: true,
			noLayout: true,
			pageTitle: "MiniOpply | Create User",
		} as IRouteMeta,
		component: () => import("./CreateUser/create-user.vue"),
	} as RouteRecordRaw,
	{
		path: "/",
		name: "Suppliers",
		meta: {
			allowAnonymous: false,
			noLayout: false,
			pageTitle: "MiniOpply | Suppliers",
		} as IRouteMeta,
		component: () => import("./Suppliers/suppliers.vue"),
	} as RouteRecordRaw,
	{
		path: "/supplier/:id",
		name: "Supplier",
		meta: {
			allowAnonymous: false,
			noLayout: false,
			pageTitle: "MiniOpply | Supplier",
		} as IRouteMeta,
		component: () => import("./Supplier/supplier.vue"),
	} as RouteRecordRaw,
	{
		path: "/quotes",
		name: "Quotes",
		meta: {
			allowAnonymous: false,
			noLayout: false,
			pageTitle: "MiniOpply | Quotes",
		} as IRouteMeta,
		component: () => import("./Quotes/quotes.vue"),
	} as RouteRecordRaw,
];
