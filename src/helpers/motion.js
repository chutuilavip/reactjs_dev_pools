import { toast } from "react-toastify";

export const variants = {
  hidden: {
    x: "20%",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    x: "0",
    opacity: 1,
  },
};

export const notify = (toastId, message) => {
  if (!toast.isActive(toastId.current)) {
    toastId.current = toast(message);
  }
};
