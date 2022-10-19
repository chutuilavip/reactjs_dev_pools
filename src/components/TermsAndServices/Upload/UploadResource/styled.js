import styled from "styled-components";
export const WrapUploadResource = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .form_upload {
    display: flex;
    flex-direction: column;
    .upload_item {
      p {
        width: 20%;
      }
      display: flex;
      width: 100%;
      gap: 7rem;
      justify-content: space-between;
    }
  }
`;
