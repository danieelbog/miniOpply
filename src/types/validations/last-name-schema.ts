import * as yup from "yup";

export const lastNameValidationSchemaCreate = yup.string().max(150, "Last Name must be 150 characters or fewer");
