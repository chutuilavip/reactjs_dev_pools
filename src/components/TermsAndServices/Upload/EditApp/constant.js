import * as yup from 'yup';
import reactImageSize from 'react-image-size';
export const schema = yup
  .object({
    title: yup.string().required(),
    appid: yup.string().required(),
    summary: yup.string().required().max(80, 'Summary must be less than 80 characters'),
    full_description: yup
      .string()
      .required('Full description is required')
      .max(4000, 'Description must be less than 4000 characters'),
    country_of_service: yup.string().required(),
    facebook: yup
      .string()
      .matches(
        /^\s*$|(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com\/*)?(?:[\w\-\.]*\/)*()/gi,
        'Invalid Facebook Link'
      ),
    instagram: yup
      .string()
      .matches(
        /^\s*$|(?:https?:\/\/)?(?:www\.)?(mbasic.instagram|m\.instagram|instagram)\.(com\/*)?(?:[\w\-\.]*\/)*()/gi,
        'Invalid instagram Link'
      ),
    skype: yup
      .string()
      .matches(
        /^\s*$|(?:https?:\/\/)?(?:www\.)?(mbasic.skype|m\.skype|skype|sk)\.(com\/*)?(?:[\w\-\.]*\/)*()/gi,
        'Invalid Skype Link'
      ),
    tiktok: yup
      .string()
      .matches(
        /^\s*$|(?:https?:\/\/)?(?:www\.)?(mbasic.tiktok|m\.tiktok|tiktok|tk)\.(com\/*)?(?:[\w\-\.]*\/)*()/gi,
        'Invalid TikTok Link'
      ),
    twitter: yup
      .string()
      .matches(
        /^\s*$|(?:https?:\/\/)?(?:www\.)?(mbasic.twitter|m\.twitter|twitter|tw)\.(com\/*)?(?:[\w\-\.]*\/)*()/gi,
        'Invalid Twitter Link'
      ),
    category: yup.string().required('Category is required'),
    type: yup.string().required('Type is required'),
    free: yup.string().required('Cost of app required'),
    // locale: yup.string().required(),
    price: yup.string().max(8, 'Price must be less than 8 digits number'),
    cover: yup
      .mixed()
      .test('fileSize', 'The size of file must be less than 2MB', (value) => {
        if (!value || value?.fileList?.length === 0) {
          return true;
        }
        if (value.fileList) {
          return value.fileList[0].size / 1024 / 1024 < 2;
        }
        return true;
      })
      .test('widthHeight', 'File must be 255 of width and 390 of height', async (value) => {
        if (!value || value?.fileList?.length === 0) {
          return true;
        }
        const file = value.file;

        const imageUrl = URL.createObjectURL(file?.originFileObj);
        try {
          const { width, height } = await reactImageSize(imageUrl);
          return width === 255 && height === 390;
        } catch (err) {
          console.log(err);
        }
      })
      .test('image-type', 'The type must be image/jpeg or image/png image/jpg', (value) => {
        if (!value || value?.fileList?.length === 0) {
          return true;
        }
        if (value.fileList) {
          for (let file of value.fileList) {
            if (
              file.type === 'image/jpeg' ||
              file.type === 'image/png' ||
              file.type === 'image/jpg'
            ) {
              return true;
            } else {
              return false;
            }
          }
        }
        return true;
      }),
    apkfile: yup.mixed().test('fileSize', 'The size of file must be less than 200MB', (value) => {
      if (!value || value?.fileList?.length === 0) {
        return true;
      }
      if (value.fileList) {
        return value.fileList[0].size / 1024 / 1024 < 200;
      }
      return true;
    }),
    // .test("apk-type", "The type must be apk", async (value) => {
    //   if (!value || value?.fileList?.length === 0) {
    //     return true;
    //   }
    //   if (value.fileList) {
    //     for (let file of value.fileList) {
    //       if (file.type === ".apk") {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     }
    //   }
    // }),
    images: yup
      .mixed()
      .test('image-type', 'The type must be image/jpeg or image/png', (value) => {
        console.log('validateeeeeeeeeeeeeeeeeeeeeeeeeeeee', value);
        if (!value || value?.fileList?.length === 0) {
          return true;
        }
        if (value.fileList) {
          for (let file of value.fileList) {
            if (file.type === 'image/jpeg' || file.type === 'image/png') {
              return true;
            } else {
              return false;
            }
          }
        }
        return true;
      })
      .test('fileLength', 'You must upload max 8 images', (value) => {
        if (!value || value?.fileList?.length === 0) {
          return true;
        }

        if (value?.fileList?.length > 8) {
          return false;
        }
        return true;
      }),
  })
  .required();
export const Types = [
  {
    locale_code: 'nft',
    title: 'NFT',
  },
  {
    locale_code: 'metaverse',
    title: 'Metaverse',
  },
  {
    locale_code: 'play-to-earn',
    title: 'Play To Earn',
  },
];
export const Cost = [
  {
    locale_code: '1',
    id: 1,
    title: 'Pay',
  },
  {
    locale_code: '0',
    id: 2,
    title: 'Free',
  },
];
export const InputFields = [
  [
    {
      name: 'appid',
      label: 'App ID',
      placeholder: 'Enter App ID',
      disabled: true,
    },
    {
      name: 'title',
      label: 'Title',
      placeholder: 'Enter App Title',
    },
  ],
  [
    {
      name: 'summary',
      label: 'Summary',
      placeholder: 'Enter Summary',
    },
    {
      name: 'full_description',
      label: 'Description',
      placeholder: 'Enter Description',
    },
  ],

  [
    {
      name: 'recent_change',
      label: 'Recent Change',
      placeholder: 'Enter Recent Change',
    },
    {
      name: 'app_version',
      label: 'App Version',
      placeholder: 'Enter App Version',
    },
  ],
  [
    {
      name: 'privacy_policy',
      label: 'Privacy Policy',
      placeholder: 'Enter Privacy Policy',
    },
    {
      name: 'term_of_policy',
      label: 'Term Of Policy',
      placeholder: 'Enter Term Of Policy',
    },
    {
      name: 'app_support',
      label: 'App Support',
      placeholder: 'Enter App Support',
    },
  ],
  [
    {
      name: 'facebook',
      label: 'Link FaceBook',
      placeholder: 'Enter Link FaceBook',
    },
    {
      name: 'instagram',
      label: 'Link Instagram',
      placeholder: 'Enter Link Instagram',
    },
    {
      name: 'skype',
      label: 'Link Skype',
      placeholder: 'Enter Link Skype',
    },
  ],
  [
    {
      name: 'tiktok',
      label: 'Link TikTok',
      placeholder: 'Enter Link TikTok',
    },
    {
      name: 'twitter',
      label: 'Link Twitter',
      placeholder: 'Enter Link Twitter',
    },
  ],
];
