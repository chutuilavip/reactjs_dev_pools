import { Avatar, Button, Input, Pagination, Popconfirm, Space, Table } from 'antd';
import React, { forwardRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteApp, getCreatedApp } from '../../../redux/slice/detailApp.slice';
import { URL_API } from '../../../utils';
import CommentModal from './CommentModal/CommentModal';
import { ListAppCreatedWrapper } from './styled';

function ListAppCreated(_, ref) {
  let DEFAULT_LIMIT = 10;
  const dispatch = useDispatch();
  const searchRef = React.useRef();

  const { createdApps, isLoadingCreatedApps } = useSelector((state) => state.detailApp);
  const [pagingParams, setPagingParams] = useState({
    limit: DEFAULT_LIMIT,
    page: 0,
    title: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    dispatch(getCreatedApp(pagingParams));
  }, [pagingParams]);

  useEffect(() => {
    return () => {
      localStorage.setItem('pagingParams', JSON.stringify(pagingParams));
    };
  }, []);
  const renderStatusClass = (statusApp) => {
    switch (statusApp) {
      case 'Active':
        return 'status_active';
      case 'Waiting':
        return 'status_waiting';
      default:
        return 'status_rejected';
    }
  };
  const columns = [
    {
      title: 'Cover',
      dataIndex: 'cover',
      key: 'cover',
      render: (src) => {
        return <Avatar src={src ? `${URL_API}/${src}` : `https://joeschmoe.io/api/v1/random`} />;
      },
    },
    {
      title: 'Developer',
      dataIndex: 'developer',
      key: 'developer',
    },
    {
      title: 'Installs',
      dataIndex: 'installs',
      key: 'installs',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        return <p className={`button ${renderStatusClass(status)}`}>{status}</p>;
      },
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: ({ slug, appId, appId2 }) => {
        return (
          <Space>
            <Popconfirm
              title="Are you sure delete this App？"
              okText="Yes"
              cancelText="No"
              onConfirm={() =>
                dispatch(
                  deleteApp({
                    appId,
                    callBack: () => {
                      dispatch(getCreatedApp(pagingParams));
                    },
                  })
                )
              }
            >
              <Button type="primary" danger className="button">
                Delete
              </Button>
            </Popconfirm>

            <Button type="primary" className="button">
              <NavLink to={`/for-publishers/edit-app/${slug}`}>Edit</NavLink>
            </Button>
            <Button
              type="primary"
              className="button"
              style={{ backgroundColor: 'yellow', border: 'none', color: 'black' }}
              onClick={() => setIsModalOpen(true)}
            >
              <NavLink
                style={{ backgroundColor: 'yellow', border: 'none', color: 'black' }}
                to={`/created-app/${appId2}`}
              >
                Comment
              </NavLink>
            </Button>
          </Space>
        );
      },
    },
  ];
  const renderRowTable = () => {
    let rows = [];
    if (createdApps) {
      createdApps.data?.forEach((item) => {
        let status = '';
        switch (Number(item.status)) {
          case 0:
            status = 'Not approve';
            break;
          case 1:
            status = 'Active';
            break;
          default:
            status = 'Waiting';
        }
        rows.push({
          cover: item.cover,
          developer: item.developer,
          installs: item.installs,
          score: item.score,
          slug: item.slug,
          status: status,
          title: item.title,
          action: { slug: item.slug, appId: item.id, appId2: item.appid },
        });
      });
    }
    return rows;
  };
  const onChangePagination = (page, pageSize) => {
    setPagingParams((prev) => {
      return { ...prev, limit: pageSize, page: page };
    });
  };
  const handleSearch = (e) => {
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      setPagingParams((prev) => {
        return { ...prev, title: e.target.value };
      });
    }, 1000);
  };
  const handleOk = () => {
    console.log('olll');
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && <CommentModal onOk={handleOk} onCancel={handleCancel} />}

      <ListAppCreatedWrapper ref={ref} id="created-app">
        <h1 style={{ width: '100%', textAlign: 'center', marginBottom: '5rem' }}>CREATED APP</h1>
        {true && (
          <div className="table">
            <Input
              placeholder="Find somethings...."
              allowClear
              size="large"
              onChange={handleSearch}
              style={{
                marginBottom: '4rem',
                width: '50%',
                marginLeft: 'auto',
              }}
            />
            <Table
              columns={columns}
              dataSource={renderRowTable()}
              pagination={false}
              loading={isLoadingCreatedApps}
            />
            <div className="pagination">
              <Pagination
                onChange={onChangePagination}
                total={createdApps?.total || DEFAULT_LIMIT}
                showSizeChanger
                showQuickJumper
              />
            </div>
          </div>
        )}
      </ListAppCreatedWrapper>
    </>
  );
}
export default forwardRef(ListAppCreated);
