import { Table } from 'antd';
import moment from 'moment';
import React from 'react';
import { ListServicesWrapper } from './styled';
const columns = [
  {
    title: 'Type of Service',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'App Name',
    dataIndex: 'app',
    key: 'app',
  },
  {
    title: 'Time Expired',
    dataIndex: 'time_expired',
    key: 'time_expired',
    render: (time_expired) => {
      const time_expired_from_now = moment.duration(time_expired - moment().valueOf()).asDays();
      console.log({
        time_expired,
        now: moment().valueOf(),
        diff: time_expired - moment().valueOf(),
        format: moment.duration(time_expired - moment().valueOf()).asDays(),
      });
      return <p>{time_expired_from_now}</p>;
    },
  },
  {
    title: 'Detail',
    dataIndex: 'detail',
    key: 'detail',
  },
  {
    title: 'Payment method',
    dataIndex: 'payments',
    key: 'payments',
  },

  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      return <p className={`button status_${status?.toString().toLowerCase()}`}>{status}</p>;
    },
    width: '10%',
  },
];
const ListServices = ({ myServices }) => {
  console.log(myServices);
  const renderRowTable = () => {
    let rows = [];
    if (myServices) {
      myServices.forEach((item) => {
        let status = '';
        switch (Number(item.status)) {
          case 0:
            status = 'Rejected';
            break;
          case 1:
            status = 'Approved';
            break;
          default:
            status = 'Pending';
        }
        rows.push({
          app: item.app?.title,
          detail: item.detail,
          payments: item.payments,
          price: item.price,
          score: item.score,
          slug: item.slug,
          type: item.type?.split('_').join(' '),
          status: status,
          key: item.id,
          time_expired: moment(item.created_at).valueOf(),
        });
      });
    }
    return rows;
  };
  return (
    <ListServicesWrapper>
      <Table
        columns={columns}
        dataSource={renderRowTable()}
        pagination={false}
        rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
      />
    </ListServicesWrapper>
  );
};

export default ListServices;
