import styled from "styled-components";

export const MyActivities = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  /* overflow-y: scroll; */
`;

export const TitleActivities = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-top: 150px;
  letter-spacing: 0.0025em;
  color: #ffffff;
`;

export const ItemsActivities = styled.div`
  width: 100%;
  height: 240px;
  margin-bottom: 26px;
  .bg_light {
    background-color: white;
  }
  .bg_dark {
    background: linear-gradient(180deg, #2e2e2e 0%, #3d3d3d 100%);
  }
  ._items {
    width: 100%;
    display: flex;
    ._img_activities {
      width: 472px;
      height: 238px;
    }
    .detail_activities {
      width: 100%;
      display: grid;
      grid-template-columns: auto auto auto;
      padding: 34px 120px;
      .grid_item {
        ._tit_acti {
          font-style: normal;
          font-weight: 700;
          font-size: 26px;
        }
        .title_dark {
          color: white;
        }
        ._show_dark {
          color: rgba(255, 255, 255, 0.7);
        }
        ._show_acti {
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
        }
      }
    }
  }
`;
