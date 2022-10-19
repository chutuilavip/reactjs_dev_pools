import market from "../../assets/setting/market.png";
import meta from "../../assets/setting/meta.png";
import game from "../../assets/setting/game.png";
import play from "../../assets/setting/play.png";
import service from "../../assets/setting/service.png";

import { Link } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { SettingScroll, WrapSetting } from "./styled";

function Setting({ show }) {
  return (
    <WrapSetting show={show}>
      <SettingScroll>
        {/* <div className="setting_item_bg"></div> */}
        <div className="setting_item_hidden"></div>
        {list.map((item, index) => {
          if (index === 0) {
            return (
              <button key={index} className="setting_item">
                <a
                  href="https://snailhouse.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="setting_item_img">
                    <LazyLoadImage src={item.icon} alt="icon" />
                  </div>

                  <span style={{ color: "white" }}>{item.name}</span>
                </a>
              </button>
            );
          } else {
            return (
              <button key={index} className="setting_item">
                <Link to={item.path}>
                  <div className="setting_item_img">
                    <LazyLoadImage src={item.icon} alt="icon" />
                  </div>

                  <span style={{ color: "white" }}>{item.name}</span>
                </Link>
              </button>
            );
          }
        })}

        <div className="setting_item_hidden"></div>
      </SettingScroll>
    </WrapSetting>
  );
}

export default Setting;

const list = [
  {
    icon: market,
    name: "NFT Market",
    path: "/nft-market",
  },
  {
    icon: meta,
    name: "Metaverse",
    path: "/metaverse",
  },
  {
    icon: game,
    name: "NFT Game",
    path: "/nft-game",
  },
  {
    icon: play,
    name: "Play to Earn",
    path: "/play-to-earn",
  },
  {
    icon: service,
    name: "POOLS Service",
    path: "/service",
  },
];
