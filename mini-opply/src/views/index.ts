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
		path: "/register",
		name: "Register",
		meta: {
			allowAnonymous: true,
			noLayout: true,
			pageTitle: "MiniOpply | Register",
		} as IRouteMeta,
		component: () => import("./Register/register.vue"),
	} as RouteRecordRaw,
	{
		path: "/",
		name: "Suppliers",
		meta: {
			allowAnonymous: false,
			noLayout: false,
			pageTitle: "MiniOpply | Suppliers",
		} as IRouteMeta,
		component: () => import("./Supplier/supplier.vue"),
	} as RouteRecordRaw,
	{
		path: "/supplier",
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
