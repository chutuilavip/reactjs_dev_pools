import { useDispatch } from "react-redux";

export const goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
export const AppDispatcher = (action) => {
  const dispatch = useDispatch();
  return dispatch(action);
};
