import React, { useEffect, useState } from 'react'
import LineChart from './charts/Linechart'
import BarChart from './charts/Barchart'
import CashFlowBarChart from './charts/Cashflow'
import AccountWatchlist from './charts/Accountwatchlist'
import "./charts/Styles.css"

const Bodycontent = () => {
const [currentMonth,setCurrentMonth]=useState("January")
  const [data,setData]=useState([])

  useEffect(()=>{
    const generateAccountData = () => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const arr = [];

months.map((imx,idx)=>{
  let monthdata=[]
  const income=Math.floor(Math.random() * 100)
  const expenses=Math.floor(Math.random() * 100)
  for (let date = 1; date <= 31; date++) {
    const accounts = Math.floor(Math.random() * 100); // Generate random account data
    monthdata.push({ month:imx, date, accounts,monthIdx:idx+1, });
  }
  const monthTotal=monthdata?.reduce((cur,itm)=>cur+itm?.accounts,0)
  arr.push({month:imx,monthdata,income,expenses,monthTotal})
})
      return arr;
    };
   
    const dataarr = generateAccountData();
    setData(dataarr)

  },[])

  // console.log(data,":data")
   
  return (
    <div className='chartContainer'>
    <LineChart  currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} data={data} />
    <BarChart data={data} currentMonth={currentMonth}/>
    <CashFlowBarChart data={data}/>
    <AccountWatchlist />
    </div>
  )
}

export default Bodycontent