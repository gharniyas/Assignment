import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import "../charts/Styles.css";


const LineChart = () => {
  const chartRef = useRef();
  const [currentMonth, setCurrentMonth] = useState('January');

  useEffect(() => {const generateAccountData = () => {
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const data = [];
  
    for (const month of months) {
      for (let date = 1; date <= 31; date++) {
        const accounts = Math.floor(Math.random() * 100);
        ; // Generate random account data
        data.push({ month, date, accounts});
      }
    }
  
    return data;
  };
    // Sample data for total accounts for all 12 months  
      const data = generateAccountData();

    // Filter the data for the current month
    const filteredData = data.filter((d) => d.month === currentMonth);

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(filteredData.map((d) => d.date))
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear().domain([0, d3.max(filteredData, (d) => d.accounts)]).nice().range([height, 0]);

    const line = d3
      .line()
      .x((d) => x(d.date) + x.bandwidth() / 2)
      .y((d) => y(d.accounts))
      .curve(d3.curveBasis); // Use curveBasis for smooth curves

    svg
      .append('path')
      .datum(filteredData)
      .attr('fill', 'none')
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('d', line);

    // X-axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0)); // Use tickSize(0) to remove horizontal lines

    // Y-axis
    svg
      .append('g')
      .call(d3.axisLeft(y));

    // Cleanup
    return () => {
      d3.select(chartRef.current).selectAll('svg').remove();
    };
  }, [currentMonth]);

  const handleChangeMonth = (event) => {
    setCurrentMonth(event.target.value);
  };

  return (
    <div className='linechart'>
      <header>Checking Accounts</header>
      <select>manage
      <option value="Manage">Manage</option>
      </select>
      <select className='Month' onChange={handleChangeMonth} value={currentMonth}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
        
      </select>
      <div ref={chartRef}></div>
    </div>
  );
};

export default LineChart;
