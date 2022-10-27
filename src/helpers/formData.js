export const ConvertToFormData = (data) => {
  const formData = new FormData();
  const keys = Object.keys(data);
  for (let v of keys) {
    if (data[v] === "null" || data[v] === undefined || data[v] === null) {
      continue;
    }
    formData.append(v, data[v]);
  }
  return formData;
};
