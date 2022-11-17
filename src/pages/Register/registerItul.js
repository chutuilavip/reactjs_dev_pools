import * as yup from 'yup';
export const InputData = [
  [
    {
      placeholder: 'Business Name *',
      register: 'business_name',
    },
  ],

  [
    {
      placeholder: 'First Name *',
      register: 'first_name',
    },
    {
      placeholder: 'Last Name *',
      register: 'last_name',
    },
  ],
  [
    {
      placeholder: 'Email*',
      register: 'email',
    },
    {
      placeholder: 'Phone Number *',
      register: 'phone_number',
    },
  ],
  [
    {
      placeholder: 'Password *',
      register: 'password',
      type: 'password',
    },
    {
      placeholder: 'Confirm Password *',
      register: 'password_confirmation',
      type: 'password',
    },
  ],
];
export const schema = yup
  .object({
    first_name: yup
      .string()
      .required('First name is required')
      .min(2, 'Min length of First Name is 2')
      .max(20, 'Max length of First Name is 20'),
    last_name: yup
      .string()
      .required('Last name is required')
      .min(2, 'Min length validate message')
      .max(20, 'Max length of Last Name is 20'),
    email: yup.string().required('Email is required').email('Invalid email address'),
    phone_number: yup
      .string()
      .required('Phone number is required')
      .matches(/^!*([0-9]!*){10,}$/gi, 'Phone number must be at least 10 digits'),
    business_name: yup.string().required('Business name is required'),

    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    password_confirmation: yup
      .string()
      .required()
      .oneOf([yup.ref('password'), null], 'Password confirm does not match'),
  })
  .required();
