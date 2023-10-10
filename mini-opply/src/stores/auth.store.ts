import { api } from "@/api/index";
import { defineStore } from "pinia";
import { IAuthToken } from "../types/IAuthToken";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
	var authToken = ref(null as IAuthToken | null);

	const setAuthToken = (authTokenDto: IAuthToken) => {
		try {
			localStorage.setItem("authToken", JSON.stringify(authTokenDto));
			authToken.value = authTokenDto;
			api.defaults.headers.common["Authorization"] = authToken.value.token;
		} catch (error) {
			console.error("Error storing string in local storage:", error);
		}
	};

	const isAuthenticated = () => {
		return authToken?.value?.token;
	};

	const getAuthTokenFromLocalStorage = () => {
		if (authToken && authToken?.value?.token) return;
		try {
			const storedAuthTokenStr = localStorage.getItem("authToken");
			const storedAuthToken = storedAuthTokenStr ? (JSON.parse(storedAuthTokenStr) as IAuthToken) : null;
			if (storedAuthToken && storedAuthToken.token) {
				setAuthToken(storedAuthToken);
			}
		} catch (error) {
			console.error("Error retrieving authToken from local storage:", error);
		}
	};

	const getAuthToken = async (authTokenDto: IAuthToken) => {
		if (authToken && authToken?.value?.token) return;
		getAuthTokenFromLocalStorage();
		try {
			const response = await api.post("/api-token-auth/", authTokenDto);
			if (response.data) {
				authTokenDto.token = response.data.token;
				setAuthToken(authTokenDto);
			} else throw new Error("Token value is empty");
		} catch (error) {
			console.error("Error fetching/authenticating:", error);
		}
	};

	const resetAuthorizationHeader = () => {
		api.defaults.headers.common["Authorization"] = "";
	};

	const logout = async () => {
		authToken.value = null;
		resetAuthorizationHeader();
		try {
			localStorage.removeItem("authToken");
		} catch (error) {
			console.error("Error removing authToken from local storage:", error);
		}
	};

	return {
		setAuthToken,
		isAuthenticated,
		getAuthToken,
		getAuthTokenFromLocalStorage,
		logout,
	};
});
