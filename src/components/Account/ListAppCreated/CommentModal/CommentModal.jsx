import { Button, Image, Input, Modal, Pagination, Table } from 'antd';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllAppComments } from '../../../../redux/slice/detailApp.slice';
import { URL_API } from '../../../../utils';
import { ModalCommentWrapper } from './styled';
const columns = [
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    render: (avatar) => {
      return <Image className="user_avatar" src={`${URL_API}/${avatar}`} preview={false} />;
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'cover',
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
    key: 'comment',
    width: '55%',
    height: 'auto',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },

  {
    title: 'Update at',
    dataIndex: 'updated_at',
    key: 'updated_at',
    render: (updated_at) => {
      return <span>{moment(updated_at).format('MMMM Do YYYY, h:mm:ss a')}</span>;
    },
  },
  {
    title: 'Dislike',
    dataIndex: 'dislike',
    key: 'dislike',
  },
  {
    title: 'Like',
    dataIndex: 'approval',
    key: 'approval',
  },
  {
    title: 'Action',
    dataIndex: 'actions',
    key: 'actions',
    render: ({ appId, commentId }) => {
      return (
        <Button type="primary" className="button">
          Reply
        </Button>
      );
    },
  },
];
const CommentModal = ({ onOk, onCancel }) => {
  let DEFAULT_LIMIT = 10;
  const params = useParams();
  const dispatch = useDispatch();
  const searchRef = useRef();
  const { appComments, isLoadingGetComment } = useSelector((state) => state.detailApp);
  const [pagingParams, setPagingParams] = useState({
    limit: DEFAULT_LIMIT,
    page: 0,
    search: '',
  });
  useEffect(() => {
    const payload = {
      appId: params.appId,
      limit: pagingParams.limit,
      page: pagingParams.page,
      search: pagingParams.search,
    };
    dispatch(getAllAppComments(payload));
  }, [pagingParams]);
  const renderRowTable = () => {
    let rows = [];
    if (appComments) {
      appComments.data?.forEach((item) => {
        let status = '';
        switch (Number(item.status)) {
          case '0':
            status = 'Not approve';
            break;
          case '1':
            status = 'Active';
            break;
          default:
            status = 'Waiting';
        }

        rows.push({
          comment: item.comment,
          name: item.title,
          title: item.title,
          rating: item.rating,
          user: item.user?.avatar,
          updated_at: item.updated_at,
          status: status,
          dislike: item.dislike,
          like: item.approval,
          actions: { appId: item.appid },
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
        return { ...prev, search: e.target.value };
      });
    }, 1000);
  };
  console.log('pagingParamspagingParams', pagingParams);
  //   if (isLoadingGetComment) return <Loading />;
  return (
    <ModalCommentWrapper>
      <Modal title="App Comment" open={true} onOk={onOk} onCancel={onCancel} footer={null}>
        <Input
          placeholder="Find somethings...."
          allowClear
          size="large"
          onChange={handleSearch}
          style={{
            marginBottom: '4rem',
            width: '50%',
            marginLeft: 'auto',
            borderRadius: '5px',
          }}
        />

        <div className="pagination_modal">
          {Number(appComments?.total) !== 0 && (
            <Pagination
              onChange={onChangePagination}
              total={appComments?.total || DEFAULT_LIMIT}
              showSizeChanger
              showQuickJumper
            />
          )}
        </div>
        <Table
          columns={columns}
          dataSource={renderRowTable()}
          pagination={false}
          loading={isLoadingGetComment}
        />
      </Modal>
    </ModalCommentWrapper>
  );
};

export default CommentModal;
