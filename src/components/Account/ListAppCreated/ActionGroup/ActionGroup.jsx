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
};

export default ActionGroup;
