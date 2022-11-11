import styled from "styled-components";
export const MainAvatar = styled.div`
  width: 100%;
`;

export const HeaderInfo = styled.div`
  display: flex;
`;

export const AvatarUser = styled.div`
  width: 150px;
  margin-right: 18px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right bottom, #2f2e86, #ffffff);
  &&& {
    .ant-avatar {
      width: 100%;
      aspect-ratio: 1/1;
      margin: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 6rem;
      color: rebeccapurple;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: white;
  }
  .id {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    color: #e0e0e0;
  }
`;

export const Onchange = styled.div`
  align-items: center;
  margin-top: 21px;
  display: flex;
  color: white;
  .button_onchange {
    padding: 3px 15px;
  }
`;
export const InfoDetail = styled.div`
  &&& {
    .ant-form-item {
      margin: 0;
    }
  }
  margin-top: 74px;
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .button_logOut {
    background-color: #141414;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    padding: 5px 14px;
    margin-top: 15px;
  }
`;

export const ShowInfo = styled.div`
  margin-top: 40px;
  .grid_container {
    display: grid;
    /* grid-template-columns: auto auto auto; */
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    gap: 47px;
  }
  .grid_item {
  }
  .one {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .two {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  Button {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
    }
  }
  .userNameField {
    display: flex;
    gap: 1rem;
    width: 100%;
    .userNameInput {
      width: 50%;
    }
  }
  .change_password_field {
    display: flex;
    gap: 1rem;
  }
  .validateMessage {
    font-size: 2rem;
    color: orange;
  }
`;
