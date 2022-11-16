import moment from 'moment';
import React from 'react';
import { CardHistoryWrapper } from './styled';

const HistoryCard = ({ data }) => {
  return (
    <CardHistoryWrapper>
      <h1>
        <span className="">Update At</span>
        <span className="detail"> {moment(data.updated_at).format('MMMM Do YYYY, h:mm:ss a')}</span>
      </h1>
      <p>
        <span className="label">Description</span>{' '}
        <span className="detail">{data.description} </span>
      </p>
      <p>
        <span className="label">App Version</span>
        <span className="detail"> {data.app_version} </span>
      </p>
      <p>
        <span className="label">App ID</span>
        <span className="detail"> {data.id_app} </span>
      </p>
      <p>
        <span className="label">Created At</span>
        <span className="detail"> {moment(data.created_at).format('MMMM Do YYYY, h:mm:ss a')}</span>
      </p>
    </CardHistoryWrapper>
  );
};

export default HistoryCard;
