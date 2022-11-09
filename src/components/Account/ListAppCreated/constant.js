import { Avatar, Button, Space } from "antd";
import { NavLink } from "react-router-dom";
import { URL_API } from "../../../utils";

export const columns = [
  {
    title: "Cover",
    dataIndex: "cover",
    key: "cover",
    render: (src) => {
      console.log(src);
      return (
        <Avatar
          src={src ? `${URL_API}/${src}` : `https://joeschmoe.io/api/v1/random`}
        />
      );
    },
  },
  {
    title: "Developer",
    dataIndex: "developer",
    key: "developer",
  },
  {
    title: "Installs",
    dataIndex: "installs",
    key: "installs",
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "Slug",
    dataIndex: "slug",
    key: "slug",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (value) => {
      return (
        <Space>
          <Button type="primary" danger>
            Delete
          </Button>
          <Button type="primary">
            <NavLink to={`/for-publishers/edit-app/${value}`}>Edit</NavLink>
          </Button>
        </Space>
      );
    },
  },
];
