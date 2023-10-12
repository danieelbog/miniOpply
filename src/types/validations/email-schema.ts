import * as yup from "yup";

export const emailValidationSchemaCreate = yup
	.string()
	.max(150, "Email must be 254 characters or fewer")
	.matches(/^[\w\.-]+@[\w\.-]+\.\w+$/, "Provide a valid email");
