export const ConvertToFormData = (data) => {
  const formData = new FormData();
  const keys = Object.keys(data);
  for (let v of keys) {
    if (data[v] === 'null' || data[v] === undefined || data[v] === null) {
      continue;
    }
    if (v === 'images') {
      const newImages = [];
      for (let image of data[v]) {
        let item = image.originFileObj;
        newImages.push(item);
      }
      for (let i = 0; i < newImages.length; i++) {
        formData.append('images[]', newImages[i], newImages[i].name);
      }
    } else if (v === 'information' || v === 'app_permissions') {
      data[v] = data[v].join();
      formData.append(v, data[v]);
    } else {
      formData.append(v, data[v]);
    }
    // else if (v === 'app_permissions' || v === 'infomations') {
    //   const tempArr = [];
    //   for (let permission of data[v]) {
    //     tempArr.push(permission);
    //   }
    //   for (let i = 0; i < tempArr.length; i++) {
    //     formData.append(`${v}[]`, tempArr[i], tempArr[i].name);
    //   }
    // }
  }
  return formData;
};

export const ConvertToFormDataV2 = (data) => {
  const formData = new FormData();
  const keys = Object.keys(data);
  for (let v of keys) {
    if (data[v] === 'null' || data[v] === undefined || data[v] === null) {
      continue;
    }
    if (v === 'images') {
      console.log(data[v].fileList);
      if (data[v].fileList) {
        const newImages = [];
        for (let image of data[v].fileList) {
          let item = image.originFileObj;
          newImages.push(item);
        }
        for (let i = 0; i < newImages.length; i++) {
          formData.append('images[]', newImages[i], newImages[i].name);
        }
      } else {
        formData.append('images[]', data[v]);
      }
    } else if (v === 'cover' || v === 'apkfile' || v === 'video') {
      if (typeof data[v] !== 'string') {
        formData.append(v, data[v].file?.originFileObj);
      } else {
        formData.append(v, data[v]);
      }
    } else if (v === 'information' || v === 'app_permissions') {
      data[v] = data[v].join();
      formData.append(v, data[v]);
    } else {
      formData.append(v, data[v]);
    }
  }
  return formData;
};
