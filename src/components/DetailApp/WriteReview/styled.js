import styled from "styled-components";

const WrapReview = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  gap: 200px;
  .write_comment {
    width: 50%;
    display: flex;
    flex-direction: column;
    .title {
      color: #ffffff;
      font-weight: 700;
      font-size: 32px;
      letter-spacing: 0.0025em;
    }
    textarea {
      background-color: #212121;
      padding: 10px;
      color: #ffffff;
      border: none;
      ::placeholder {
        font-weight: 400;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.56);
      }
    }
  }
`;

const RatingUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 50px;
  p {
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .list_star {
    color: white;
    svg {
      font-size: 40px;
    }
  }
  .btn_rate_now {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.0015em;
    cursor: pointer;

    color: #ffffff;
    width: 414px;
    height: 80px;
    background: #3b72fe;
  }
`;

export { WrapReview, RatingUser };
