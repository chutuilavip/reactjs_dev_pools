import styled from "styled-components";

export const Hero = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
`;

export const Container = styled.div`
  max-width: 100%;
  width: 98%;
  margin: 60px auto;
`;

export const SlideCategrogy = styled.div`
  max-width: 100%;
  width: 97%;
  margin: 0 auto 60px auto;

  .title {
    max-width: 100%;
    color: #ffffff;
    font-weight: 700;
    font-size: 32px;
    line-height: 41.6px;
    padding-bottom: 2%;
  }

  .item_select {
    max-width: 100%;
    width: 15%;
    align-items: center;
    text-align: center;
    margin-right: 2%;
    color: white;
  }

  .btn-modal {
    background-color: white;
    color: black;
  }
`;

export const SlideImg = styled.div`
  max-width: 100%;
  color: white;
  padding-top: 4%;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 2%;
`;
