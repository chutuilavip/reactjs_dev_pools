import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export const goToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
  console.log(string.toLowerCase().replaceAll(' ', '-'));
  return string.toLowerCase().replaceAll(' ', '-');
};
export const URL_API = process.env.REACT_APP_URL_API;
export const getFileName = (link) => {
  if (link) {
    const regexGetFileName = /[ \w-]+\.[\w-]*$/;
    return link.match(regexGetFileName)[0];
  }
};
export const convertLinkToObjectFile = (link) => {
  // link = `https://api.v2.poolsplay.store/${link}`;
  let file = null;
  if (link !== '') {
    const fileName = getFileName(link);
    axios(link)
      .then(async (response) => {
        console.log('ollllllllllllll');
        const contentType = response.headers.get('content-type');
        const blob = await response.blob();
        file = new File([blob], fileName, { contentType });
        console.log(file);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return file;
};

export const ToastError = (res) => {
  if (res.error) {
    toast.error(res.error);
  } else if (res.errors) {
    res.errors.forEach((el) => toast.error(el));
  }
};

export const getLanguages = () => {
  const languages = JSON.parse(localStorage.getItem('languages'));
  return languages;
};
