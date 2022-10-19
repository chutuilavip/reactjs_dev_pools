import React from "react";
import { Table } from "antd";
import { TitleActivities } from "./styled";
import { useTranslation } from "react-i18next";

const TodayActivities = ({ res }) => {
  console.log(res.data);
  const { t } = useTranslation();

  const columns = [
    {
      title: `${t("account.time")}`,
      dataIndex: "time",
      key: "time",
    },
    {
      title: `${t("account.action")}`,
      dataIndex: "action",
      key: "action",
    },
    {
      title: `${t("account.type")}`,
      dataIndex: "type",
      key: "type",
    },
    {
      title: `${t("account.view")}`,
      dataIndex: "view",
      key: "view",
    },
  ];
  const dataSource = [
    {
      key: "1",
      time: "Mike",
      action: 32,
      type: "10 Downing Street",
      view: "view",
    },
    {
      key: "2",
      time: "John",
      action: 42,
      type: "10 Downing Street",
      view: "view",
    },
  ];
  return (
    <>
      <TitleActivities>{t("account.today_activities")}</TitleActivities>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
};

export default TodayActivities;
