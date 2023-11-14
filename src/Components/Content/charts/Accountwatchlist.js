import React from "react";
import ChartContainer from "../chartContainer";
import { Flex, Table } from "antd";


const columns = [
  {
    title: "Account",
    dataIndex: "account",
    key: "account",
    render: (text) => <div style={{ paddingRight: '200px' }}>{text}</div>,
    
  },
  {
    title: "This Month",
    dataIndex: "thisMonth",
    key: "thisMonth",
  },
  {
    title: "YTD",
    dataIndex: "ytd",
    key: "ytd",
  },
];

const datasource = [
  {
    key: "1",
    account: "Sales",
    thisMonth: `1,194.58`,
    ytd: `11,418.29`,
  },
  {
    key: "2",
    account: "Advertising",
    thisMonth: `6,879.02`,
    ytd: `9,271.36`,
  },
  {
    key: "3",
    account: "Inventory",
    thisMonth: `4,692.26`,
    ytd: `9,768.09`,
  },
  {
    key: "4",
    account: "Entertainment",
    thisMonth: `0.00`,
    ytd: `0.00`,
  },
  {
    key: "5",
    account: "Product",
    thisMonth: `4,652.10`,
    ytd: `2,529.90`,
  },
];

const AccountWatchlist = () => {
  return (
    
    <ChartContainer headerContent={<header style={{marginTop:"5px"}}>Account Watchlist</header>}>
      <div style={{flex: 1, height: '1px', backgroundColor: '#D3D3D3' }} />
      <Table columns={columns} dataSource={datasource} pagination={false}  />
    </ChartContainer>
   
  );
};

export default AccountWatchlist;
