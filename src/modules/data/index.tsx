import React, {useEffect, useState} from "react";
import {Button, DatePicker, Table} from "antd";
import type {ColumnsType} from "antd/es/table";
import moment from "moment";
import {getDataSensor} from "@app/api/ApiSensor";

interface DataType {
  temperature: string;
  humidity: string;
  light: string;
  key?: string;
  id: number;
}

export function Data() {
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
      title: "Nhiệt độ",
      dataIndex: "temperature",
      key: "temperature",
      align: "center",
      render: (text) => `${text} C`,
      sorter: (a, b) => Number(b.temperature) - Number(a.temperature),
    },
    {
      title: "Độ ẩm",
      dataIndex: "humidity",
      key: "humidity",
      align: "center",
      render: (text) => `${text} %`,
      sorter: (a, b) => Number(b.humidity) - Number(a.humidity),
    },
    {
      title: "Ánh sáng",
      dataIndex: "light",
      key: "light",
      align: "center",
      render: (text) => `${text} Lux`,
      sorter: (a, b) => Number(b.light) - Number(a.light),
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
    getDataSensor(query).then((res) => {
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
