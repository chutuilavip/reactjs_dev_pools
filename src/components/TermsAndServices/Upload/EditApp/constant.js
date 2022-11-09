import * as yup from "yup";
export const schema = yup
  .object({
    title: yup.string().required(),
    appid: yup.string().required(),
    summary: yup.string().required(),
    full_description: yup.string().required(),
    country_of_service: yup.string().required(),
    category: yup.string().required(),
    type: yup.string().required(),
    free: yup.string().required(),
    // locale: yup.string().required(),
    price: yup.string().max(8, "Price must be less than 8 digits number"),
    cover: yup
      .mixed()
      .test("fileSize", "The file is too large", (value) => {
        if (!value || value?.fileList?.length === 0) {
          return true;
        }
        if (value.fileList) {
          return value.fileList[0].size / 1024 / 1024 < 2;
        }
        return true;
      })

      .test(
        "image-type",
        "The type must be image/jpeg or image/png",
        (value) => {
          if (!value || value?.fileList?.length === 0) {
            return true;
          }
          if (value.fileList) {
            for (let file of value.fileList) {
              if (file.type === "image/jpeg" || file.type === "image/png") {
                return true;
              } else {
                return false;
              }
            }
          }
          return true;
        }
      ),
    apkfile: yup.mixed().test("fileSize", "The file is too large", (value) => {
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
      .test(
        "image-type",
        "The type must be image/jpeg or image/png",
        (value) => {
          if (!value || value?.fileList?.length === 0) {
            return true;
          }
          if (value.fileList) {
            for (let file of value.fileList) {
              if (file.type === "image/jpeg" || file.type === "image/png") {
                return true;
              } else {
                return false;
              }
            }
          }
          return true;
        }
      )
      .test(
        "fileLength",
        "You must upload at least 2 images and max is 10 images",
        (value) => {
          if (!value || value?.fileList?.length === 0) {
            return true;
          }
          if (value?.fileList?.length < 2) {
            return false;
          }
          if (value?.fileList?.length > 10) {
            return false;
          }
          return true;
        }
      ),
  })
  .required();
export const Types = [
  {
    locale_code: "nft",
    title: "NFT",
  },
  {
    locale_code: "metaverse",
    title: "Metaverse",
  },
  {
    locale_code: "play-to-earn",
    title: "Play To Earn",
  },
];
export const Cost = [
  {
    locale_code: "1",
    id: 1,
    title: "Pay",
  },
  {
    locale_code: "0",
    id: 2,
    title: "Free",
  },
];
