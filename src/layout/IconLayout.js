import iconPeople from "../assets/AroundLeft/iconpeople.png";
import logoshopping from "../assets/AroundLeft/shopping.png";
import icon4 from "../assets/AroundLeft/icon4.png";
import iconmetaverse from "../assets/Header/iconmetaverse.png";
import iconnftgame from "../assets/Header/iconxbox.png";
import playtoearn from "../assets/Header/playtoearn.png";
import nftmarket from "../assets/Header/nftmarket.png";
import poolsservice from "../assets/Header/poolsservice.png";
//================================================
import fire from "../assets/AroundRight/meta/fire.png";
import earch from "../assets/AroundRight/meta/earch.png";
import caro from "../assets/AroundRight/meta/caro.png";
import user from "../assets/AroundRight/meta/user.png";
import group from "../assets/AroundRight/meta/group.png";
//================================================
import action from "../assets/AroundRight/nft/action.png";
import arcade from "../assets/AroundRight/nft/arcade.png";
import battle from "../assets/AroundRight/nft/battle.png";
import rpg from "../assets/AroundRight/nft/rpg.png";
import sport from "../assets/AroundRight/nft/sport.png";
//================================================
import need from "../assets/AroundRight/play/need.png";
import play from "../assets/AroundRight/play/non.png";
const icon_left = [
  {
    icon: logoshopping,
    name: "Store",
    path: "/playstore",
    alt: "playstore",
  },
  {
    icon: icon4,
    name: "Library",
    path: "/library",
    alt: "library",
  },
  {
    icon: iconPeople,
    name: "Friends",
    path: "/friends",
    alt: "friends",
  },
];

const icon_right_meta = [
  {
    name: "Survival",
    icon: fire,
    path: "",
    alt: "icon category",
  },
  {
    name: "Openworld",
    icon: earch,
    path: "",
    alt: "icon category",
  },
  {
    name: "Tactics",
    icon: caro,
    path: "",
    alt: "icon category",
  },
  {
    name: "Singleplayer",
    icon: user,
    path: "",
    alt: "icon category",
  },
  {
    name: "Multiplayer",
    icon: group,
    path: "",
    alt: "icon category",
  },
];
const icon_right_nft = [
  {
    name: "Sport",
    icon: sport,
    path: "/sport",
    alt: "icon category",
  },
  {
    name: "RPG",
    icon: rpg,
    path: "/rpg",
    alt: "icon category",
  },
  {
    name: "Arcade",
    icon: arcade,
    path: "/arcade",
    alt: "icon category",
  },
  {
    name: "Battle",
    icon: battle,
    path: "/battle",
    alt: "icon category",
  },
  {
    name: "Action",
    icon: action,
    path: "/action",
    alt: "icon category",
  },
];
const icon_right_play = [
  {
    name: "Need",
    icon: need,
    path: "",
    alt: "icon category",
  },
  {
    name: "Play",
    icon: play,
    path: "",
    alt: "icon category",
  },
];
const icon_right_pool = [
  {
    name: "Sport",
    icon: sport,
    path: "",
    alt: "icon category",
  },
  {
    name: "RPG",
    icon: rpg,
    path: "",
    alt: "icon category",
  },
  {
    name: "Arcade",
    icon: arcade,
    path: "",
    alt: "icon category",
  },
  {
    name: "Battle",
    icon: battle,
    path: "",
    alt: "icon category",
  },
  {
    name: "Action",
    icon: action,
    path: "",
    alt: "icon category",
  },
];

// icon header
const icon_header = [
  {
    icon: iconnftgame,
    path: "https://v2.poolsplay.store/nft-game",
    text: "NFT Games",
    alt: "icon nft game",
    target: "_self",
  },
  {
    icon: iconmetaverse,
    path: "https://v2.poolsplay.store/metaverse",
    text: "Metaverse",
    alt: "icon metaverse",
    target: "_self",
  },
  {
    icon: playtoearn,
    path: "https://v2.poolsplay.store/play-to-earn",
    text: "Play To Earn",
    alt: "icon play to earn",
    target: "_self",
  },
  {
    icon: nftmarket,
    path: "/nft-market",
    text: "NFT Market",
    alt: "icon nft market",
    target: "_blank",
  },
  {
    icon: poolsservice,
    path: "https://v2.poolsplay.store/service",
    text: "Pools Service",
    alt: "icon pools service",
    target: "_self",
  },
];
export {
  icon_left,
  icon_header,
  icon_right_meta,
  icon_right_play,
  icon_right_nft,
  icon_right_pool,
};
