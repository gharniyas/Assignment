import React from 'react';
const data = [
    {
      month: 'January',
      incomeGain: 30000,
      losses: 12000,
      weeklyData: [
        { week: 1, gain: 5000, losses: 2000 },
        { week: 2, gain: 6000, losses: 2500 },
        { week: 3, gain: 7000, losses: 2800 },
        { week: 4, gain: 8000, losses: 3200 },
      ],
      sales: 10000,
      advertisement: 2000,
      inventory: 5000,
      entertainment: 1500,
      product: 2500,
      salesYTD: 10000,
      advertisementYTD: 2000,
      inventoryYTD: 5000,
      entertainmentYTD: 1500,
      productYTD: 2500,
    },
    {
      month: 'February',
      incomeGain: 35000,
      losses: 11000,
      weeklyData: [
        { week: 1, gain: 5200, losses: 1800 },
        { week: 2, gain: 6000, losses: 2400 },
        { week: 3, gain: 7200, losses: 2800 },
        { week: 4, gain: 8200, losses: 2800 },
      ],
      sales: 11000,
      advertisement: 2200,
      inventory: 5500,
      entertainment: 1600,
      product: 2600,
      salesYTD: 21000,
      advertisementYTD: 4200,
      inventoryYTD: 10500,
      entertainmentYTD: 3100,
      productYTD: 5100,
    },
    {
      month: 'March',
      incomeGain: 32000,
      losses: 10000,
      weeklyData: [
        { week: 1, gain: 5100, losses: 1900 },
        { week: 2, gain: 5900, losses: 2300 },
        { week: 3, gain: 7100, losses: 2700 },
        { week: 4, gain: 8000, losses: 2600 },
      ],
      sales: 12000,
      advertisement: 2400,
      inventory: 5200,
      entertainment: 1700,
      product: 2700,
      salesYTD: 33000,
      advertisementYTD: 6600,
      inventoryYTD: 15700,
      entertainmentYTD: 4800,
      productYTD: 7800,
    },
    {
      month: 'April',
      incomeGain: 31000,
      losses: 13000,
      weeklyData: [
        { week: 1, gain: 5200, losses: 2200 },
        { week: 2, gain: 6100, losses: 2500 },
        { week: 3, gain: 7000, losses: 2800 },
        { week: 4, gain: 8100, losses: 3100 },
      ],
      sales: 11500,
      advertisement: 2300,
      inventory: 5300,
      entertainment: 1550,
      product: 2650,
      salesYTD: 44500,
      advertisementYTD: 8900,
      inventoryYTD: 21000,
      entertainmentYTD: 6350,
      productYTD: 10450,
    },
    {
      month: 'May',
      incomeGain: 34000,
      losses: 10000,
      weeklyData: [
        { week: 1, gain: 5200, losses: 2200 },
        { week: 2, gain: 6100, losses: 2500 },
        { week: 3, gain: 7000, losses: 2800 },
        { week: 4, gain: 8100, losses: 3100 },
      ],
      sales: 10500,
      advertisement: 2250,
      inventory: 5400,
      entertainment: 1575,
      product: 2725,
      salesYTD: 55000,
      advertisementYTD: 11150,
      inventoryYTD: 26400,
      entertainmentYTD: 7925,
      productYTD: 13175,
    },
    {
      month: 'June',
      incomeGain: 36000,
      losses: 11000,
      weeklyData: [
        { week: 1, gain: 5400, losses: 2000 },
        { week: 2, gain: 6200, losses: 2400 },
        { week: 3, gain: 7100, losses: 2800 },
        { week: 4, gain: 8100, losses: 3100 },
      ],
      sales: 12500,
      advertisement: 2200,
      inventory: 5500,
      entertainment: 1650,
      product: 2650,
      salesYTD: 67500,
      advertisementYTD: 13350,
      inventoryYTD: 31900,
      entertainmentYTD: 9575,
      productYTD: 15825,
    },
    {
      month: 'July',
      incomeGain: 35000,
      losses: 9000,
      weeklyData: [
        { week: 1, gain: 5300, losses: 1900 },
        { week: 2, gain: 6100, losses: 2300 },
        { week: 3, gain: 7000, losses: 2700 },
        { week: 4, gain: 8000, losses: 3000 },
      ],
      sales: 10500,
      advertisement: 2100,
      inventory: 5300,
      entertainment: 1600,
      product: 2700,
      salesYTD: 78000,
      advertisementYTD: 15450,
      inventoryYTD: 37200,
      entertainmentYTD: 11175,
      productYTD: 18525,
    },
    {
      month: 'August',
      incomeGain: 38000,
      losses: 10000,
      weeklyData: [
        { week: 1, gain: 5500, losses: 2000 },
        { week: 2, gain: 6200, losses: 2400 },
        { week: 3, gain: 7100, losses: 2800 },
        { week: 4, gain: 8000, losses: 3200 },
      ],
      sales: 11000,
      advertisement: 2000,
      inventory: 5500,
      entertainment: 1600,
      product: 2600,
      salesYTD: 89000,
      advertisementYTD: 17450,
      inventoryYTD: 42700,
      entertainmentYTD: 12775,
      productYTD: 21125,
    },
    {
      month: 'September',
      incomeGain: 33000,
      losses: 9500,
      weeklyData: [
        { week: 1, gain: 5400, losses: 2000 },
        { week: 2, gain: 6200, losses: 2400 },
        { week: 3, gain: 7100, losses: 2800 },
        { week: 4, gain: 8000, losses: 3100 },
      ],
      sales: 10500,
      advertisement: 2100,
      inventory: 5300,
      entertainment: 1600,
      product: 2600,
      salesYTD: 99500,
      advertisementYTD: 19550,
      inventoryYTD: 48000,
      entertainmentYTD: 14375,
      productYTD: 23725,
    },
    {
      month: 'October',
      incomeGain: 36000,
      losses: 10500,
      weeklyData: [
        { week: 1, gain: 5500, losses: 1900 },
        { week: 2, gain: 6200, losses: 2400 },
        { week: 3, gain: 7100, losses: 2800 },
        { week: 4, gain: 8000, losses: 3100 },
      ],
      sales: 11000,
      advertisement: 2000,
      inventory: 5500,
      entertainment: 1600,
      product: 2600,
      salesYTD: 110500,
      advertisementYTD: 21550,
      inventoryYTD: 53500,
      entertainmentYTD: 15975,
      productYTD: 26325,
    },
    {
      month: 'November',
      incomeGain: 35000,
      losses: 10000,
      weeklyData: [
        { week: 1, gain: 5400, losses: 2000 },
        { week: 2, gain: 6200, losses: 2400 },
        { week: 3, gain: 7100, losses: 2800 },
        { week: 4, gain: 8000, losses: 3100 },
      ],
      sales: 10500,
      advertisement: 2100,
      inventory: 5300,
      entertainment: 1600,
      product: 2600,
      salesYTD: 121000,
      advertisementYTD: 23650,
      inventoryYTD: 58800,
      entertainmentYTD: 17575,
      productYTD: 28925,
    },
    {
      month: 'December',
      incomeGain: 37000,
      losses: 9500,
      weeklyData: [
        { week: 1, gain: 5500, losses: 1900 },
        { week: 2, gain: 6200, losses: 2400 },
        { week: 3, gain: 7100, losses: 2800 },
        { week: 4, gain: 8000, losses: 3100 },
      ],
      sales: 11000,
      advertisement: 2000,
      inventory: 5500,
      entertainment: 1600,
      product: 2600,
      salesYTD: 132000,
      advertisementYTD: 25650,
      inventoryYTD: 64300,
      entertainmentYTD: 19175,
      productYTD: 31525,
    },
  ];
  
  
  
const AccountWatchlist = () => {
  return (
    <table className='customChart'>
      <thead>
        <tr>
          <th>Accounts</th>
          <th>This Month</th>
          <th>YTD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sales</td>
          <td>{data.sales}</td>
          <td>{data.salesYTD}</td>
        </tr>
        <tr>
          <td>Advertisement</td>
          <td>{data.advertisement}</td>
          <td>{data.advertisementYTD}</td>
        </tr>
        <tr>
          <td>Inventory</td>
          <td>{data.inventory}</td>
          <td>{data.inventoryYTD}</td>
        </tr>
        <tr>
          <td>Entertainment</td>
          <td>{data.entertainment}</td>
          <td>{data.entertainmentYTD}</td>
        </tr>
        <tr>
          <td>Product</td>
          <td>{data.product}</td>
          <td>{data.productYTD}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AccountWatchlist;
