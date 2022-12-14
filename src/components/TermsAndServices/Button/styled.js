import styled from "styled-components";

export const PackageButtonWrapper = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  /* cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")}; */
  justify-content: center;
  color: #757575;
  background: #212121;
  outline: none;
  border: none;
  width: 8.2rem;
  height: 8.2rem;
  font-size: 3.2rem;

  &:hover {
    background-color: #3b72fe;
    color: white;
  }
`;
