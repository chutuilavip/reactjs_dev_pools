import styled from "styled-components";

export const PackageButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  pointer-events: ${(props) => (props.disabled ? "none" : "")};
  justify-content: center;
  color: #757575;
  background: #212121;
  outline: none;
  border: none;
  width: 8.2rem;
  height: 8.2rem;
  font-size: 3.2rem;

  /* &:hover {
      background-color: #3b72fe;
      color: white;
   } */
`;
