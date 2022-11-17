import React, { useState } from 'react';
import UploadAppDetail from './UploadAppDetail/UploadAppDetail';
import styled from 'styled-components';
import UploadResource from './UploadResource';
import UploadAppDetailWrapper from './UploadAppDetailWrapper/UploadAppDetailWrapper';
import { useEffect } from 'react';
import { requiredFieldsWhenCreateNewApp } from '../../../utils/UploadUtils';

const Upload = () => {
  useEffect(() => {
    const currentDevInfo = JSON.parse(localStorage.getItem('dev'));
    console.log(currentDevInfo);
    if (currentDevInfo) {
      for (let v of requiredFieldsWhenCreateNewApp) {
        if (!currentDevInfo[v]) {
          setTimeout(() => {
            alert(
              'Your information lack somethings!! You need complete your information before creating new app'
            );
            window.location = '/account';
          }, 500);
          return;
        }
      }
    } else {
      setTimeout(() => {
        alert(
          'Your information lack somethings!! You need complete your information before creating new app'
        );
        window.location = '/account';
      }, 500);
    }
  }, []);
  return (
    <div>
      <UploadAppDetailWrapper />
      <FooterUpload></FooterUpload>
    </div>
  );
};

export default Upload;

const FooterUpload = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 60px auto;
`;

const ListStep = styled.div`
  display: flex;
  div {
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;
    color: #ffffff;
    padding: 20px;
    background-color: #3b72fe;
  }
`;

const ListBtn = styled.div`
  display: flex;
  gap: 20px;
  .btn_next {
    background-color: #3b72fe;
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;
    color: #ffffff;
    padding: 20px 30px;
    cursor: pointer;
  }
  .btn_prev {
    background-color: #181818;
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;
    color: #ffffff;
    padding: 20px 30px;
    cursor: pointer;
  }
`;
