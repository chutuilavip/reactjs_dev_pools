import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import setting from "../../assets/home/setting.png";
import logo from "../../assets/home/logo.png";
import {
  ContentCenter,
  ContentGame,
  FooterHomePage,
  FooterLeft,
  FooterRight,
  HeaderHompage,
  HeaderLeft,
  HeaderRecommend,
  HeaderRight,
  RecommendGame,
  WrapHomePage,
} from "./styled";
import SearchHome from "../../components/SearchHome/SearchHome";
import GameItem from "../../components/GameItem/GameItem";
import { getListGameRecommend } from "../../redux/slice/game.slice";
import Setting from "../../components/Settings/Setting";
import { checkLogin, logOut } from "../../redux/slice/user.slice";

function HomePage() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const { recommendGames } = useSelector((state) => state.listGame);
  const user = useSelector((state) => state?.user?.infoUser);
  const listGame = recommendGames?.res?.data;

  const token = JSON.parse(localStorage.getItem("tokens"));

  useEffect(() => {
    dispatch(getListGameRecommend());
    if (token) {
      dispatch(checkLogin(token));
    }
  }, []);

  return (
    <WrapHomePage>
      <HeaderHompage>
        <HeaderLeft>
          {navbar.map((item, index) => (
            <div key={index}>
              {index === 3 ? (
                <a
                  className="nav_link"
                  href={item.path}
                  style={{ color: "white", fontWeight: "700" }}
                  target="blank"
                >
                  {item.name}
                </a>
              ) : (
                <Link to={item.path} className="nav_link">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </HeaderLeft>

        <HeaderRight>
          {!token ? (
            <>
              <Link to="/login" className="nav_link">
                Sign in
              </Link>

              <Link to="/register" className="nav_link">
                Create Acount
              </Link>
            </>
          ) : (
            <>
              <div
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  marginRight: "30px",
                }}
              >
                {user?.first_name} {user?.last_name}
              </div>

              <button
                onClick={() => {
                  dispatch(logOut());
                }}
                style={{ cursor: "pointer" }}
                className="nav_link"
              >
                Log Out
              </button>
            </>
          )}

          <button className="btn_setting" onClick={() => setShow(!show)}>
            <img src={setting} alt="setting" />
          </button>
        </HeaderRight>
      </HeaderHompage>

      <ContentCenter>
        <div className="logo_img">
          <img src={logo} alt="logo" width="100%" />
        </div>

        <SearchHome />

        <RecommendGame>
          <HeaderRecommend>
            <span>Recommended</span>
            <Link to="/nft-game" style={{ color: "white" }}>
              See more &#62;
            </Link>
          </HeaderRecommend>

          <ContentGame>
            {listGame?.map((game, index) => {
              return <GameItem key={index} dataGame={game} />;
            })}
          </ContentGame>
        </RecommendGame>
      </ContentCenter>

      <FooterHomePage>
        <FooterRight>
          {navbarRight.map((item, index) => (
            <div key={index}>
              <Link to={item.path} className="nav_link_b">
                {item.name}
              </Link>
            </div>
          ))}
        </FooterRight>

        <div style={{ color: "white" }}>
          <span>COPYRIGT &#169; POOLS. ALL RIGHTS RESERVED</span>
        </div>

        <FooterLeft>
          {navbarLeft.map((item, index) => (
            <div key={index}>
              <Link to={item.path} className="nav_link_b">
                {item.name}
              </Link>
            </div>
          ))}
        </FooterLeft>
      </FooterHomePage>

      <Setting show={show} />
    </WrapHomePage>
  );
}

export default HomePage;

const navbar = [
  {
    name: "POOLS WEBSITE",
    path: "/nft-game",
  },
  {
    name: "POOLS APP",
    path: "/playstore",
  },
  {
    name: "POOLS NFTS",
    path: "/nft-game",
  },
  {
    name: "POOLS MARKET PLACE",
    path: "https://snailhouse.io/",
  },
];

const navbarRight = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Tutorial",
    path: "/",
  },
  {
    name: "Help",
    path: "/",
  },
];

const navbarLeft = [
  {
    name: "Privacy",
    path: "/",
  },
  {
    name: "Terms",
    path: "/",
  },
];
