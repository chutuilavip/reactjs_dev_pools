import reactImageSize from "react-image-size";
import * as yup from "yup";
const ResourceSchema = yup.object().shape({
  uploadavatar: yup
    .mixed()
    .test("fileSize", "The file is too large", (value) => {
      if (!value || !value[0]) {
        return true;
      }
      return value[0].size / 1024 / 1024 < 2;
    })
    .test("required", "The file is required", (value) => {
      if (!value || value.length === 0) {
        return false;
      }
      return true;
    })
    .test(
      "widthHeight",
      "File must be 255 of width and 390 of height",
      async (value) => {
        const file = value[0];
        if (!value || !value[0]) {
          return true;
        }
        const imageUrl = URL.createObjectURL(file?.originFileObj);
        try {
          const { width, height } = await reactImageSize(imageUrl);
          return width === 255 && height === 390;
        } catch (err) {
          console.log(err);
        }
      }
    )
    .test(
      "image-type",
      "The type must be image/jpeg or image/png",
      async (value) => {
        if (!value || !value.length > 0) {
          return true;
        }
        for (let file of value) {
          if (file.type === "image/jpeg" || file.type === "image/png") {
            return true;
          } else {
            return false;
          }
        }
      }
    ),
  images: yup
    .mixed()
    .required()
    .test("fileSize", "The file is too large", (value) => {
      if (!value) {
        return true;
      }
      for (let v of value) {
        if (v.size / 1024 / 1024 < 3) {
          return true;
        }
        return false;
      }
    })
    .test(
      "fileLength",
      "You must upload at least 2 images and max is 10 images",
      (value) => {
        if (!value) {
          return false;
        }
        if (value.length < 2) {
          return false;
        }
        if (value.length > 10) {
          return false;
        }
        return true;
      }
    )
    .test(
      "image-type",
      "The type must be image/jpeg or image/png",
      async (value) => {
        if (!value || !value.length > 0) {
          return true;
        }
        for (let file of value) {
          if (file.type === "image/jpeg" || file.type === "image/png") {
            return true;
          } else {
            return false;
          }
        }
      }
    ),
});

export default ResourceSchema;
