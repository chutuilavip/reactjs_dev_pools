import styled from "styled-components";

export const UploadAplWrapper = styled.div`
  margin: auto;
  margin-bottom: 7rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  form {
    width: 100%;
    .field_item {
      display: flex;
      justify-content: space-between;
    }
  }
  label {
    margin-right: 20rem;
  }
  .upload_btn {
    background: #e1d7d7;
    padding: 3rem 35rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .error_field {
    color: red;
  }
`;
