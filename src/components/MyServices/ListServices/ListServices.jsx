import { Button, Modal, Table } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import ServiceModal from '../ServiceModal/ServiceModal';
import { ListServicesWrapper } from './styled';

const getStatus = (orders, type) => {
  let statusString = '';
  const item = orders.find((el) => el.type === type);
  if (item) {
    switch (Number(item.status)) {
      case 0:
        statusString = 'Rejected';
        break;
      case 1:
        statusString = 'Approved';
        break;
      default:
        statusString = 'Pending';
    }
  }

  return statusString;
};
const ListServices = ({ myServices }) => {
  const navigate = useNavigate();
  const columns = [
    // {
    //   title: 'Type of Service',
    //   dataIndex: 'type',
    //   key: 'type',
    // },
    {
      title: 'App Name',
      dataIndex: 'app',
      key: 'app',
    },
    {
      title: 'Banner Home',
      children: [
        {
          title: 'Status',
          dataIndex: 'banner_home_status',
          key: 'banner_home_status',
          render: (banner_home_status) => {
            if (!banner_home_status) {
              return (
                <p style={{ border: '1px solid black', padding: '1rem', borderRadius: '5px' }}>
                  Haven't Bought
                </p>
              );
            }
            return (
              <p className={`button status_${banner_home_status?.toString().toLowerCase()}`}>
                {banner_home_status}
              </p>
            );
          },
        },
        {
          title: 'Detail',
          dataIndex: 'banner_home_detail',
          key: 'banner_home_detail',
          render: (banner_home_detail) => {
            console.log(banner_home_detail);
            if (!banner_home_detail.content) {
              return null;
            }
            return (
              <Button
                onClick={() => {
                  navigate(
                    `/for-publishers/my-services/${banner_home_detail?.content.id_app}/${banner_home_detail?.content.id}`
                  );
                  showModal();
                }}
                style={{ height: '4.2rem' }}
              >
                Show detail
              </Button>
            );
          },
        },
      ],
    },
    {
      title: 'Banner',
      children: [
        {
          title: 'Status',
          dataIndex: 'banner_status',
          key: 'banner_status',
          render: (banner_status) => {
            if (!banner_status) {
              return (
                <p style={{ border: '1px solid black', padding: '1rem', borderRadius: '5px' }}>
                  Haven't Bought
                </p>
              );
            }
            return (
              <p className={`button status_${banner_status?.toString().toLowerCase()}`}>
                {banner_status}
              </p>
            );
          },
        },
        {
          title: 'Detail',
          dataIndex: 'banner_detail',
          key: 'banner_detail',
          render: (banner_detail) => {
            if (!banner_detail.content) {
              return null;
            }
            return (
              <Button
                onClick={() => {
                  navigate(
                    `/for-publishers/my-services/${banner_detail?.content.id_app}/${banner_detail?.content.id}`
                  );
                  showModal();
                }}
                style={{ height: '4.2rem' }}
              >
                Show detail
              </Button>
            );
          },
        },
      ],
    },
    {
      title: 'Top Game',
      children: [
        {
          title: 'Status',
          dataIndex: 'top_game_status',
          key: 'top_game_status',
          render: (top_game_status) => {
            if (!top_game_status) {
              return (
                <p style={{ border: '1px solid black', padding: '1rem', borderRadius: '5px' }}>
                  Haven't Bought
                </p>
              );
            }
            return (
              <p className={`button status_${top_game_status?.toString().toLowerCase()}`}>
                {top_game_status}
              </p>
            );
          },
        },
        {
          title: 'Detail',
          dataIndex: 'top_game_detail',
          key: 'top_game_detail',
          render: (top_game_detail) => {
            if (!top_game_detail.content) {
              return null;
            }
            return (
              <Button
                onClick={() => {
                  navigate(
                    `/for-publishers/my-services/${top_game_detail?.content.id_app}/${top_game_detail?.content.id}`
                  );
                  showModal();
                }}
                style={{ height: '4.2rem' }}
              >
                Show detail
              </Button>
            );
          },
        },
      ],
    },
    {
      title: 'Hot Game',
      children: [
        {
          title: 'Status',
          dataIndex: 'hot_game_status',
          key: 'hot_game_status',
          render: (hot_game_status) => {
            if (!hot_game_status) {
              return (
                <p style={{ border: '1px solid black', padding: '1rem', borderRadius: '5px' }}>
                  Haven't Bought
                </p>
              );
            }
            return (
              <p className={`button status_${hot_game_status?.toString().toLowerCase()}`}>
                {hot_game_status}
              </p>
            );
          },
        },
        {
          title: 'Detail',
          dataIndex: 'hot_game_detail',
          key: 'hot_game_detail',
          render: (hot_game_detail) => {
            if (!hot_game_detail.content) {
              return null;
            }
            return (
              <Button
                onClick={() => {
                  navigate(
                    `/for-publishers/my-services/${hot_game_detail?.content.id_app}/${hot_game_detail?.content.id}`
                  );
                  showModal();
                }}
                style={{ height: '4.2rem' }}
              >
                Show detail
              </Button>
            );
          },
        },
      ],
    },
    // {
    //   title: 'Time Expired',
    //   dataIndex: 'time_expired',
    //   key: 'time_expired',
    //   render: (time_expired) => {
    //     const time_expired_from_now = moment.duration(time_expired - moment().valueOf()).asDays();
    //     console.log({
    //       time_expired,
    //       now: moment().valueOf(),
    //       diff: time_expired - moment().valueOf(),
    //       format: moment.duration(time_expired - moment().valueOf()).asDays(),
    //     });
    //     return <p>{time_expired_from_now}</p>;
    //   },
    // },
    // {
    //   title: 'Detail',
    //   dataIndex: 'detail',
    //   key: 'detail',
    // },
    // {
    //   title: 'Payment method',
    //   dataIndex: 'payments',
    //   key: 'payments',
    // },

    // {
    //   title: 'Price',
    //   dataIndex: 'price',
    //   key: 'price',
    // },

    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   key: 'status',
    //   render: (status) => {
    //     return <p className={`button status_${status?.toString().toLowerCase()}`}>{status}</p>;
    //   },
    //   width: '10%',
    // },
  ];
  const renderRowTable = () => {
    let rows = [];
    if (myServices) {
      myServices.forEach((item) => {
        rows.push({
          app: item.title,
          detail: item.detail,
          payments: item.payments,
          price: item.price,
          score: item.score,
          slug: item.slug,
          type: item.type?.split('_').join(' '),
          banner_status: getStatus(item.orders, 'banner'),
          banner_home_status: getStatus(item.orders, 'banner_home'),
          top_game_status: getStatus(item.orders, 'top_game'),
          hot_game_status: getStatus(item.orders, 'hot_game'),
          key: item.id,
          time_expired: moment(item.created_at).valueOf(),
          banner_home_detail: {
            content: item.orders.find((el) => {
              return el?.type === 'banner_home';
            }),
          },
          banner_detail: {
            content: item.orders.find((el) => {
              return el?.type === 'banner';
            }),
          },
          top_game_detail: {
            content: item.orders.find((el) => el?.type === 'top_game'),
          },
          hot_game_detail: {
            content: item.orders.find((el) => el?.type === 'hot_game'),
          },
        });
      });
    }
    return rows;
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <ListServicesWrapper>
      <Modal title="Detail Service" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <ServiceModal data={myServices} />
      </Modal>
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
