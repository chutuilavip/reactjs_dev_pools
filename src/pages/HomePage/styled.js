import styled from "styled-components";

const WrapHomePage = styled.div`
  background-color: #000;
  height: 100vh;
  width: 100%;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const HeaderHompage = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav_link {
    padding: 15px 30px;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    &:hover {
      background: linear-gradient(90deg, #3b72fe 0%, rgba(0, 0, 0, 0) 90%);
    }
  }
  .btn_setting {
    padding: 0 30px;
    cursor: pointer;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentCenter = styled.div`
  width: 58%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .logo_img {
    width: 244px;
    height: 85px;
  }
`;
const RecommendGame = styled.div`
  width: 100%;
  z-index: 9;
`;
const HeaderRecommend = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin-bottom: 10px;
`;
const ContentGame = styled.div`
  display: flex;
`;
const FooterHomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  .nav_link_b {
    padding: 0 30px;
    font-size: 16px;
    color: #fff !important;
    font-weight: bold;
    cursor: pointer;
  }
`;
const FooterRight = styled.div`
  display: flex;
`;
const FooterLeft = styled.div`
  display: flex;
`;

export {
  WrapHomePage,
  HeaderHompage,
  HeaderLeft,
  HeaderRight,
  ContentCenter,
  HeaderRecommend,
  RecommendGame,
  ContentGame,
  FooterHomePage,
  FooterRight,
  FooterLeft,
};
