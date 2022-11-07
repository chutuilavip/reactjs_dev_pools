import styled from "styled-components";

export const WrapTermsAndServices = styled.div`
  &&& {
    .swiper {
      height: 35rem;
      width: 100%;
    }
    .swiper-pagination-bullet {
      width: 2rem;
      height: 2rem;
      border-radius: 0px;
      background: transparent;
      opacity: 1;
      border: 1px solid #007aff;
    }
    .swiper-pagination-bullet-active {
      opacity: var(--swiper-pagination-bullet-opacity, 1);
      background: var(--swiper-pagination-color, var(--swiper-theme-color));
    }
    .swiper-pagination-bullets-dynamic {
      overflow: unset;
    }
    .ant-empty-image svg {
      transform: scale(4);
    }
    .ant-empty-normal .ant-empty-image {
      height: 100%;
    }
    .ant-empty-normal {
      width: 100%;
    }
  }
  background-color: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header_title {
    text-transform: uppercase;
    text-align: center;
    font-size: 3.2rem;
    margin: 4rem 0;
    color: white;
  }
  .package_cards {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 1rem;
    margin-bottom: 4rem;
  }
  .footer_btn {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    button {
      color: ${(props) => props.buttonColor};
    }
  }
  .btn_next {
    cursor: pointer;
    background: #212121;
    outline: none;
    border: none;
    width: auto;
    padding: 0 6.3rem;
    height: 8.2rem;
    font-size: 3.2rem;
    transition: all 0.25s ease-in;
    &:hover {
      background: #3b72fe;
      color: white !important;
      transition: all 0.25s ease-in;
    }
  }
`;
export const PackageCardWrapper = styled.div`
  background-color: ${({ status }) => (status ? "#3b72fe" : "#1c212f")};
  cursor: pointer;
  flex: 1 1 30rem;
  padding: 2rem;
  min-width: 25rem;
  height: 100%;
  h1 {
    text-align: center;
  }
  .times {
    text-transform: capitalize;
    color: white;
  }
  .prices {
    color: #ff0000;
  }
  .content {
    color: white;
    word-break: break-word;
  }
`;
