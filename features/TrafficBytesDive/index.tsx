import React, { useContext, useEffect, useState } from "react";
import { Button, Table, Typography } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import * as raw_data from "./data/cleansed.json";
import TrafficBytesContext from "context/TrafficBytesContext";

interface DataType {
  key: string;
  destination: string;
  source: string;
  sumbytes: string;
}

const _data: DataType[] = raw_data.reduce((accum: DataType[], current: any) => {
  const item = {
    key: uuidv4(),
    destination: current.result["All_Traffic.dest"] as string,
    source: current.result["All_Traffic.dest"] as string,
    sumbytes: current.result.sum_bytes as string,
  };
  accum.push(item);
  return accum;
}, []);

export interface ITrafficBytesDiveProps {
  heading?: string;
}
const TrafficBytesDive: React.FC = ({
  heading = "🚦 Traffic Bytes Dive 🤿",
}: ITrafficBytesDiveProps) => {
  const [filtersSrc, setFiltersSrc] = useState([]);
  const [filtersDest, setFiltersDest] = useState([]);
  const [filtersSumbytes, setFiltersSumbytes] = useState([]);
  const [filteredSrcValue, setFilteredSrcValue] = useState([]);
  const [filteredDestValue, setFilteredDestValue] = useState([]);
  const [filteredSumbytesValue, setFilteredSumbytesValue] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useContext(TrafficBytesContext);

  const onChange: TableProps<DataType>["onChange"] = (filters) => {
    const _filters = {
      destination: filters.destination || [],
      source: filters.source || [],
      sumbytes: filters.sumbytes || [],
    };
    setFilteredDestValue(_filters.destination);
    setFilteredSrcValue(_filters.source);
    setFilteredSumbytesValue(_filters.sumbytes);
    setSelectedRowKeys(_filters);
  };

  const handleSelectRow = (dataIndex: string, record: DataType) => {
    const _selected = [...selectedRowKeys[dataIndex]];
    const _index = _selected.indexOf(record[dataIndex]);
    if (_index > -1) {
      _selected.splice(_index, 1);
    } else {
      _selected.push(record[dataIndex]);
    }
    const _rows = { ...selectedRowKeys, [dataIndex]: _selected };
    setSelectedRowKeys(_rows);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Source",
      dataIndex: "source",
      filters: filtersSrc,
      filteredValue: filteredSrcValue,
      filterSearch: true,
      // sorter: (a, b) => a.source.length - b.source.length,
      onFilter: (value: string, record) => record.source.startsWith(value),
      width: "45%",
      render: (text: string, record: DataType) => (
        <a
          onClick={() => {
            handleSelectRow("source", record);
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "Destination",
      dataIndex: "destination",
      filters: filtersDest,
      filteredValue: filteredDestValue,
      filterSearch: true,
      // sorter: (a, b) => a.destination.length - b.destination.length,
      onFilter: (value: string, record) => record.destination.startsWith(value),
      render: (text: string, record: DataType) => (
        <a
          onClick={() => {
            handleSelectRow("destination", record);
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "Sum Bytes",
      dataIndex: "sumbytes",
      filters: filtersSumbytes,
      filteredValue: filteredSumbytesValue,
      filterSearch: true,
      onFilter: (value: string, record) => record.sumbytes.startsWith(value),
      // sorter: (a, b) => a.sumbytes.length - b.sumbytes.length,
      render: (text: string, record: DataType) => (
        <a
          onClick={() => {
            handleSelectRow("sumbytes", record);
          }}
        >
          {text}
        </a>
      ),
    },
  ];
  useEffect(() => {
    const filtersSrc = selectedRowKeys?.source?.map((item: any) => {
      return {
        value: item,
        text: item,
      };
    });
    const filtersDest = selectedRowKeys?.destination?.map((item: any) => {
      return {
        value: item,
        text: item,
      };
    });
    const filtersSumbytes = selectedRowKeys?.sumbytes?.map((item: any) => {
      return {
        value: item,
        text: item,
      };
    });
    setFiltersSrc(filtersSrc);
    setFiltersDest(filtersDest);
    setFiltersSumbytes(filtersSumbytes);
  }, [selectedRowKeys]);
  useEffect(() => {
    const filteredSrcValues = filtersSrc?.map((i) => i.value);
    const filteredDestValues = filtersDest?.map((i) => i.value);
    const filteredSumbytesValues = filtersSumbytes?.map((i) => i.value);
    setFilteredSrcValue(filteredSrcValues);
    setFilteredDestValue(filteredDestValues);
    setFilteredSumbytesValue(filteredSumbytesValues);
  }, [filtersSrc, filtersDest, filtersSumbytes]);
  const clearAllFilters = () => {
    setFiltersSrc([]);
    setFiltersDest([]);
    setFiltersSumbytes([]);
    setFilteredSrcValue([]);
    setFilteredDestValue([]);
    setFilteredSumbytesValue([]);
    setSelectedRowKeys({ source: [], destination: [], sumbytes: [] });
  };
  return (
    <>
      <Typography.Title level={3}>{heading}</Typography.Title>
      <div>
        <Button size="small" onClick={clearAllFilters}>
          Clear all filters
        </Button>
      </div>
      <Table
        style={{ width: 520, margin: 12 }}
        columns={columns}
        dataSource={_data}
        onChange={onChange}
      />
    </>
  );
};
export default TrafficBytesDive;
