import React, { useState, useEffect } from "react";
import { ListAppCreatedWrapper } from "./styled";
import { AudioOutlined } from "@ant-design/icons";
import { Avatar, Button, Pagination, Space, Switch, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCreatedApp } from "../../../redux/slice/account.slice";
import Item from "antd/lib/list/Item";
import { URL_API } from "../../../utils";
import { columns } from "./constant";
import { Input } from "antd";
const { Search } = Input;

export default function ListAppCreated() {
  let DEFAULT_LIMIT = 10;
  const [isShowListApp, setIsShowListApp] = useState(false);
  const [fixedTop, setFixedTop] = useState(false);
  const dispatch = useDispatch();
  const searchRef = React.useRef();
  const { createdApps, isLoadingCreatedApps } = useSelector(
    (state) => state.account
  );
  console.log("createdAppscreatedApps", createdApps);
  const [pagingParams, setPagingParams] = useState({
    limit: DEFAULT_LIMIT,
    page: 0,
    title: "",
  });

  useEffect(() => {
    dispatch(getCreatedApp(pagingParams));
  }, [pagingParams]);

  useEffect(() => {
    return () => {
      localStorage.setItem("pagingParams", JSON.stringify(pagingParams));
    };
  }, []);
  const renderRowTable = () => {
    let rows = [];
    if (createdApps) {
      createdApps.data.forEach((item) => {
        let status = "";
        switch (Number(item.status)) {
          case 0:
            status = "Not approve";
            break;
          case 1:
            status = "Active";
            break;
          default:
            status = "Waiting";
        }
        rows.push({
          cover: item.cover,
          developer: item.developer,
          installs: item.installs,
          score: item.score,
          slug: item.slug,
          status: status,
          title: item.title,
          action: item.slug,
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
    <ListAppCreatedWrapper>
      <Button
        type="primary"
        onClick={() => setIsShowListApp((prev) => !prev)}
        style={{ marginBottom: "5rem", width: "40rem", height: "6rem" }}
      >
        {isShowListApp ? "Hide List App Created" : "Show List App Created"}
      </Button>

      {isShowListApp && (
        <div className="table">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onChange={onSearch}
            style={{ marginBottom: "4rem", width: "50%", marginLeft: "auto" }}
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
  );
}
