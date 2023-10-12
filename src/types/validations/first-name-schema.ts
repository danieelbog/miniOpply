import * as yup from "yup";

export const firstNameValidationSchemaCreate = yup.string().max(150, "First Name must be 150 characters or fewer");
