import { Button, Popconfirm, Space } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteApp, getCreatedApp } from '../../../../redux/slice/detailApp.slice';

const ActionGroup = ({ slug, appId, appId2, pagingParams, setIsModalOpen }) => {
  const dispatch = useDispatch();
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

      <Button type="primary" className="button" style={{ border: 'none', padding: '0' }}>
        <NavLink
          style={{
            border: 'none',
            display: 'inline-block',
            padding: '4px 15px',
          }}
          to={`/for-publishers/edit-app/${slug}`}
        >
          Edit
        </NavLink>
      </Button>
      <Button
        type="primary"
        className="button"
        style={{ backgroundColor: 'yellow', border: 'none', color: 'black', padding: '0' }}
        // onClick={() => setIsModalOpen(true)}
      >
        <NavLink
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: 'yellow',
            border: 'none',
            color: 'black',
            width: '100%',
            height: '100%',
            display: 'inline-block',
            padding: '4px 15px',
          }}
          to={`/for-publishers/created-app/${appId2}`}
        >
          Comment
        </NavLink>
      </Button>
    </Space>
  );
};

export default ActionGroup;
