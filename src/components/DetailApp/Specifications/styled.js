import styled from "styled-components";

const WrapSpecification = styled.div`
  margin-top: 60px;
  .title {
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
    padding-bottom: 30px;
  }
`;

const BlockSpecifi = styled.div`
  background: #212121;
  padding: 48px;

  .header_block {
    border-bottom: 3px solid #bdbdbd;
    padding-bottom: 20px;
  }
  .middle_block {
    padding-top: 30px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: 240px;
  }
  .footer_block {
    margin-top: 30px;
    border-top: 3px solid #bdbdbd;

    .block_flag {
      display: flex;
      align-items: center;
      gap: 25px;
      width: 80%;
      margin: 0 auto;
      margin-top: 20px;
      .language {
        display: flex;
        flex-direction: column;
        gap: 10px;
        p {
          font-weight: 700;
          font-size: 32px;
          line-height: 130%;
          letter-spacing: 0.0025em;
          color: #ffffff;
        }
        .flag {
          display: flex;
          gap: 10px;
          span {
            font-weight: 400;
            font-size: 24px;
            line-height: 100%;
            letter-spacing: 0.0015em;
            color: rgba(255, 255, 255, 0.7);
          }
          .list_flag {
            display: flex;
            gap: 20px;
            margin-left: 20px;
          }
        }
      }
    }
  }
`;

const DeviceBlock = styled.div`
  .title_block {
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
    padding-bottom: 30px;
  }
  .item_device {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export { WrapSpecification, BlockSpecifi, DeviceBlock };
