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
