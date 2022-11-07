import { useDispatch } from "react-redux";

export const goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
export const AppDispatcher = (action) => {
  const dispatch = useDispatch();
  return dispatch(action);
};
export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
export const changeStringToAlias = (string) => {
  console.log(string);
  console.log(string.toLowerCase().replaceAll(" ", "-"));
  return string.toLowerCase().replaceAll(" ", "-");
};
export const URL_API = process.env.REACT_APP_URL_API;
