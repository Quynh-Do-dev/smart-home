import React, {useEffect, useState} from "react";
import {Button, DatePicker, Table} from "antd";
import type {ColumnsType} from "antd/es/table";
import moment from "moment";
import { getDataHistoryAction } from "@app/api/ApiHistoryAction";

interface DataType {
  temperature: string;
  humidity: string;
  light: string;
  key?: string;
  id: number;
}

export function HistoryAction() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState<any>({
    createdAt: moment(),
    page: 1,
    pageSize: 100,
  });
  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "no",
      key: "no",
      width: 80,
      align: "center",
      render: (_, __, index) => (query.page - 1) * query?.pageSize + index + 1,
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Loại",
      dataIndex: "type",
      key: "type",
      align: "center",
    },
    {
      title: "Người dùng",
      dataIndex: "user",
      key: "user",
      align: "center",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: "CreatedAt",
      key: "createdAt",
      align: "center",
      dataIndex: "createdAt",
      render: (date) => moment(date).format("DD/MM/YYYY"),
    },
  ];

  const handleLoadData = (query: any) => {
    setIsLoading(true);
    getDataHistoryAction(query).then((res) => {
      setIsLoading(false);
      setData(res?.results);
    });
  };

  useEffect(() => {
    handleLoadData(query);
  }, [query]);
  return (
    <div>
      <div className="flex items-center justify-between px-1">
        <div className="font-bold text-[18px] pb-10">Dữ liệu cảm biến</div>
        <div className="flex gap-2">
          <Button type="primary" onClick={() => handleLoadData(query)}>
            Làm mới
          </Button>
          <DatePicker
            format={["DD-MM-YYYY"]}
            defaultValue={query?.createdAt}
            onChange={(value) => {
              if (value) {
                setQuery({
                  ...query,
                  createdAt: moment(value)?.format("YYYY-MM-DD"),
                });
              } else {
                setQuery({
                  ...query,
                  createdAt: value,
                });
              }
            }}
          />
        </div>
      </div>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: query?.pageSize ?? 100,
          current: query?.page ?? 1,
          onChange: (page, pageSize) => {
            setQuery({
              ...query,
              page: page,
              pageSize: pageSize,
            });
          },
        }}
      />
    </div>
  );
}
