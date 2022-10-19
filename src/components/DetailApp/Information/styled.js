import styled from "styled-components";

const WrapInfor = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 150px;
  .des_ifo {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .title {
      font-weight: 700;
      font-size: 32px;
      letter-spacing: 0.0025em;
      color: #ffffff;
    }
    .description {
      color: #ffffff;
      height: 150px;
      ::-webkit-scrollbar {
        width: 2px;
      }
      ::-webkit-scrollbar-track {
        background: #212121;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #000000;
        border-radius: 16px;
        border: 3px solid #ffffff;
      }
      word-break: break-word;
      overflow-y: scroll;
      width: 100%;
    }
    .show_more {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      gap: 5px;

      font-style: italic;
      font-weight: 700;
      font-size: 24px;
      letter-spacing: 0.0025em;
      color: #bdbdbd;
    }
  }
`;

const StyleRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .title {
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .rate {
    display: flex;
    align-items: center;
    color: white;
    gap: 30px;
    span,
    svg {
      font-weight: 700;
      font-size: 48px;
      letter-spacing: 0.0025em;
      color: #ffffff;
    }
    .count_view {
      font-weight: 700;
      font-size: 24px;
      letter-spacing: 0.0025em;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export { WrapInfor, StyleRating };
