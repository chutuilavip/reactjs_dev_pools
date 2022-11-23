import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceModal = ({ data }) => {
  const params = useParams();
  const dataSv = data.filter((item) => item.id === Number(params.appId));
  const infoOrder =
    dataSv && dataSv[0]?.orders.filter((item) => item.id === Number(params.serviceId));

  return (
    <div>
      {infoOrder ? (
        <>
          <p>Expired Day : {infoOrder[0].configservice.title}</p>
          <p>Price : {infoOrder[0].configservice.price}</p>
          <p>View : {infoOrder[0].configservice.views}</p>
          <p>Detail : {infoOrder[0].detail}</p>
          <p>Type : {infoOrder[0].type}</p>
          <p>Payment : {infoOrder[0].payments}</p>
        </>
      ) : (
        'No data'
      )}
    </div>
  );
};

export default ServiceModal;
