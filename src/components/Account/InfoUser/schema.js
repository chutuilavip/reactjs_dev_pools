import * as yup from 'yup';
export const editInfoUserSchema = yup
  .object({
    first_name: yup
      .string()
      .required('First name is required')
      .min(2, 'min length of first name is 2')
      .max(10, 'min length of first name is 10'),
    last_name: yup
      .string()
      .required('Last name is required')
      .min(2, 'min length of first name is 2')
      .max(10, 'min length of first name is 10'),
    phone_number: yup
      .string()
      .required('Phone number is required')
      .min(5, 'phone number must be greater than 4 numbers')
      .max(13, 'phone number must be less or equal 13 numbers')
      .matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, 'invalid phone number'),

    business_name: yup.string().required('Business name is required'),
    // application_catalog: yup.string().required(),
    contact_name: yup
      .string()
      .required('Contact name is required')
      .max(255, 'Contact name must be less than 255 characters'),
    product_and_services: yup
      .string()
      .required('Product and services is required')
      .max(255, 'Contact name must be less than 255 characters'),
    address: yup.string().required('Address is required'),
    // products_url: yup
    //   .string()
    //   .required()
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     "Enter correct url!"
    //   ),
    // release_details: yup
    //   .string()
    //   .required()
    //   .max(255, "Contact name must be less than 255 characters"),
    website: yup
      .string()
      .required('Website is required')
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
      ),
    // year_established: yup
    //   .number("Year established can not be characters")
    //   .required()
    //   .min(
    //     new Date().getFullYear(),
    //     "Year must be current year or greater than current year"
    //   ),
    password: yup.string(),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password confirm does not match'),
  })
  .required();
