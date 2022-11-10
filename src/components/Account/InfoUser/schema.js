import * as yup from "yup";
export const editInfoUserSchema = yup
  .object({
    first_name: yup.string().required().min(2).max(10),
    last_name: yup
      .string()
      .required()
      .min(2, "Min length validate message")
      .max(10),
    email: yup.string().required().email(),
    phone_number: yup
      .string()
      .required()
      .max(10, "phone number must be less than 10 numbers"),
    // country: yup.string().required(),
    business_name: yup.string().required(),
    application_catalog: yup.string().required(),
    contact_name: yup
      .string()
      .required()
      .max(255, "Contact name must be less than 255 characters"),
    product_and_services: yup
      .string()
      .required()
      .max(255, "Contact name must be less than 255 characters"),
    address: yup.string().required(),
    products_url: yup
      .string()
      .required()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      ),
    release_details: yup
      .string()
      .required()
      .max(255, "Contact name must be less than 255 characters"),
    website: yup
      .string()
      .required()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      ),
    year_established: yup
      .number("Year established can not be characters")
      .required()
      .min(
        new Date().getFullYear(),
        "Year must be current year or greater than current year"
      ),
    password: yup.string(),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password confirm does not match"),
  })
  .required();
