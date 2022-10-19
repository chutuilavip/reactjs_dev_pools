import { useEffect } from "react";

const Redirect = ({url}) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
};

export default Redirect;
