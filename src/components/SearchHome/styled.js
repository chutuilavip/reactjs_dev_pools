import styled from "styled-components";

const WrapSearch = styled.div`
  position: relative;
  background: #fff;
  z-index: 99;

  .search_item {
    padding: 2.2%;
    display: flex;
    align-items: center;
    .icon__search {
      pointer-events: ${({ word }) => word.length === 0 && "none"};
      cursor: pointer;
    }
    input {
      width: 100%;
      padding-left: 30px;
      ::placeholder {
        color: #3b72fe;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
      }
    }
  }
`;
const HistorySearch = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
  z-index: 99;
  background: #fff;
  border: 1px solid #3b72fe;
`;
const KeySearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 13px;
  cursor: pointer;

  .keyRes {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &:hover {
    background: #3b72fe;
    .icon_oclock {
      color: #fff;
    }
    .icon_close {
      color: #fff;
      display: block;
      cursor: pointer;
    }
  }
  .icon_close {
    display: none;
  }
  .icon_oclock {
    color: #3b72fe;
  }
`;
export { WrapSearch, HistorySearch, KeySearch };
