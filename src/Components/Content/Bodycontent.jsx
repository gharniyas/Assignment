import React from 'react'
import LineChart from './charts/Linechart'
import BarChart from './charts/Barchart'
import CashFlowBarChart from './charts/Cashflow'
import AccountWatchlist from './charts/Accountwatchlist'
import "./charts/Styles.css"




const Bodycontent = () => {
  
 
  return (
    <div className='chartContainer'>
   
       
    <LineChart  />
    <BarChart/>
    <CashFlowBarChart/>
    <AccountWatchlist/>
   
    </div>


  )
}

export default Bodycontent