import * as yup from "yup";
export const InputData = [
  {
    field_1: {
      placeholder: "Business Name *",
      register: "business_name",
    },
    field_2: {
      placeholder: "Contact Name *",
      register: "contact_name",
    },
  },
  {
    field_1: {
      placeholder: "Website *",
      register: "website",
    },
    field_2: {
      placeholder: "Products and Services *",
      register: "product_and_services",
    },
  },

  // {
  //   field_1: {
  //     placeholder: "Release details *",
  //     register: "release_details",
  //   },
  //   field_2: {
  //     placeholder: "Products URL *",
  //     register: "products_url",
  //   },
  // },
  // {
  //   field_1: {
  //     placeholder: "Year Established *",
  //     register: "year_established",
  //     type: "number",
  //   },
  //   field_2: {
  //     placeholder: "Application catalog *",
  //     register: "application_catalog",
  //   },
  // },
  {
    field_1: {
      placeholder: "First Name *",
      register: "first_name",
    },
    field_2: {
      placeholder: "Last Name *",
      register: "last_name",
    },
  },
  {
    field_1: {
      placeholder: "Email*",
      register: "email",
    },
    field_2: {
      placeholder: "Phone Number *",
      register: "phone_number",
    },
  },
  {
    field_1: {
      placeholder: "Password *",
      register: "password",
      type: "password",
    },
    field_2: {
      placeholder: "Confirm Password *",
      register: "password_confirmation",
      type: "password",
    },
  },
];
export const schema = yup
  .object({
    first_name: yup
      .string()
      .required("First name is required")
      .min(2, "Min length of First Name is 2")
      .max(10, "Max length of First Name is 10"),
    last_name: yup
      .string()
      .required("Last name is required")
      .min(2, "Min length validate message")
      .max(10),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    phone_number: yup.string().required("Phone number is required"),
    business_name: yup.string().required("Business name is required"),
    // application_catalog: yup
    //   .string()
    //   .required("Application catalog is required"),
    contact_name: yup.string().required("Contact name is required"),
    product_and_services: yup
      .string()
      .required("Products and Services are required"),
    address: yup.string().required("Address is required"),
    // products_url: yup
    //   .string()
    //   .required("Products url is required")
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     "Enter correct url!"
    //   ),
    // release_details: yup.string().required("Release Details is required"),
    website: yup
      .string()
      .required("Website is required")
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      ),
    // year_established: yup
    //   .number()
    //   .typeError("Year established must be a number")
    //   .required("Year established is required")
    //   .min(
    //     new Date().getFullYear(),
    //     "Year must be current year or greater than current year"
    //   ),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    password_confirmation: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Password confirm does not match"),
  })
  .required();
