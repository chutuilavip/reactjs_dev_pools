import styled from 'styled-components';

export const CardHistoryWrapper = styled.div`
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 4rem;
  min-width: 70rem;
  background: white;
  position: relative;
  .status {
    position: absolute;
    background: green;
    top: -9%;
    right: -10px;
    width: 7rem;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
    text-transform: uppercase;
    font-size: 10px;
  }
  .approved {
    background: green;
  }
  .rejected {
    background: red;
  }
  .pending {
    background: blue;
  }
  p {
    margin-bottom: 1rem;
    width: 100%;
    margin-right: 5rem;
    padding: 5px 2rem;
    border-radius: 5px;
    color: black;
    display: flex;
  }
  .label {
    color: #4e7093;
    text-transform: uppercase;
    margin-right: 2rem;
    min-width: 24%;
    display: inline-block;
  }
`;
