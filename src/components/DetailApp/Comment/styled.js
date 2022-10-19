import styled from "styled-components";
const WrapComment = styled.div`
  width: 371px;
  height: 221px;
  padding: 16px;
  background: #212121;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .line {
    height: 1px;
    width: 100%;
    background-color: #ffffff;
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    .time {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  color: white;
  display: flex;
  align-items: center;
  .text_comment {
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
`;

const CommentTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .like {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const RenderStar = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  svg {
    font-size: 20px;
  }
`;

export { WrapComment, CommentTop, RenderStar };
