import React, { useState, useEffect, forwardRef } from 'react';
import { ListAppCreatedWrapper } from './styled';
import { AudioOutlined } from '@ant-design/icons';
import { Avatar, Button, Pagination, Popconfirm, Space, Switch, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Item from 'antd/lib/list/Item';
import { URL_API } from '../../../utils';
import { columns } from './constant';
import { Input } from 'antd';
import { NavLink, useSearchParams } from 'react-router-dom';
import { deleteApp, getCreatedApp } from '../../../redux/slice/detailApp.slice';
import Loading from '../../../layout/components/Loading/Loading';
const { Search } = Input;

function ListAppCreated(_, ref) {
  let DEFAULT_LIMIT = 10;
  const [isShowListApp, setIsShowListApp] = useState(false);
  const [fixedTop, setFixedTop] = useState(false);
  const dispatch = useDispatch();
  const searchRef = React.useRef();

  const { createdApps, isLoadingCreatedApps } = useSelector((state) => state.detailApp);
  const [pagingParams, setPagingParams] = useState({
    limit: DEFAULT_LIMIT,
    page: 0,
    title: '',
  });

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
        console.log(src);
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
        console.log(status);
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
      render: ({ slug, appId }) => {
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
                      console.log('callback');
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
          </Space>
        );
      },
    },
  ];
  console.log('createdAppscreatedAppscreatedAppscreatedAppscreatedAppscreatedApps', createdApps);
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
          action: { slug: item.slug, appId: item.id },
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
  const onSearch = (e) => {
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      setPagingParams((prev) => {
        return { ...prev, title: e.target.value };
      });
    }, 1000);
  };
  return (
    <>
      <ListAppCreatedWrapper ref={ref} id="created-app">
        <h1 style={{ width: '100%', textAlign: 'center', marginBottom: '5rem' }}>CREATED APP</h1>
        {true && (
          <div className="table">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onChange={onSearch}
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
