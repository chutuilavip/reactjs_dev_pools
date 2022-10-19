import styled from "styled-components";

export const WrapTermsAndServices = styled.div`
  background-color: black;
  .header_title {
    text-transform: uppercase;
    text-align: center;
    font-size: 3.2rem;
    margin: 4rem 0;
    color: white;
  }
  .package_cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 1rem;
    margin-bottom: 25rem;
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
  background-color: #1c212f;
  flex: 1 1 30rem;
  padding: 2rem;
  min-width: 25rem;
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
    word-break: break-all;
  }
`;
