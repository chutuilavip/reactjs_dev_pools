import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { URL_API } from "../../../constants/constants";
import { notify } from "../../../helpers/motion";
import { dowloadGame } from "../../../redux/slice/game.slice";
import { BoxGame } from "./styled";

const PurchaseGame = ({ infoApp }) => {
  const { price, title, cover, file_apk, appid } = infoApp.app;
  const addressWallet = useSelector((state) => state.web3.account);
  const dispatch = useDispatch();
  const params = { app_id: appid, creator_address: addressWallet };
  const { statusDownload } = useSelector((state) => state.listGame);

  const ref = useRef();

  useEffect(() => {
    statusDownload?.status === 200 && ref.current.click();
  }, [statusDownload?.status]);

  const token = JSON.parse(localStorage.getItem("tokens"));

  const handleDownloadApp = () => {
    if (token) {
      dispatch(dowloadGame(params));
    } else {
      notify(ref, "Please log in !");
    }
  };

  return (
    <BoxGame>
      <div className="logo_game">
        <LazyLoadImage
          style={{ width: "150px", height: "150px" }}
          src={`${URL_API}/${cover}`}
          alt="img"
        />
      </div>

      <div className="content">
        <div className="base_game">
          <p className="name">{title}</p>
          {Number(price) === 0 ? (
            <p className="name">FREE</p>
          ) : (
            <p className="price">${price}</p>
          )}
        </div>
        <div className="title_game">
          {Number(price) === 0 ? (
            <p className="text_one">Click to install</p>
          ) : (
            <p className="text_one">Paid to play</p>
          )}

          <p className="text_two">
            {Number(price) === 0
              ? "Free game"
              : " May include in-app purchases."}
          </p>
        </div>
      </div>
      {Number(price) === 0 ? (
        <>
          <div className="btn_purchase" onClick={handleDownloadApp}>
            INSTALL NOW
          </div>
          <a ref={ref} href={`${file_apk}`} hidden download></a>
        </>
      ) : (
        <div className="btn_purchase">PURCHASE NOW</div>
      )}
    </BoxGame>
  );
};

export default PurchaseGame;
