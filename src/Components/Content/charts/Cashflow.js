import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';


const CashFlowBarChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data for months and cash flow values (you can replace this with your data)
    const data = [
      { month: 'January', income: 1000, expenses: 800 },
      { month: 'February', income: 1200, expenses: 950 },
      { month: 'March', income: 900, expenses: 850 },
      { month: 'April', income: 1100, expenses: 950 },
      { month: 'May', income: 1300, expenses: 1000 },
      { month: 'June', income: 950, expenses: 550 },
      { month: 'July', income: 450, expenses: 860 },
      { month: 'August', income: 650, expenses: 600 },
      { month: 'September', income: 850, expenses: 700 },
      { month: 'October', income: 750, expenses: 870 },
      { month: 'November', income: 880, expenses: 820 },
      { month: 'December', income: 970, expenses: 670 },
      
      // Add data for the remaining months
    ];

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
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0.5);

    const y = d3.scaleLinear().domain([0, d3.max(data, (d) => d.income)]).nice().range([height, 0]);
    const barRadius=10;
    // Create bars for income
    svg
      .selectAll('.income-bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'income-bar')
      .attr('x', (d) => x(d.month))
      .attr('y', (d) => y(d.income))
      .attr('width', x.bandwidth())
      .attr('height', (d) => height - y(d.income))
      .attr('fill', 'darkgreen')
      .attr('rx',barRadius)
      .attr('ry',barRadius);

    // Create bars for expenses
    svg
      .selectAll('.expenses-bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'expenses-bar')
      .attr('x', (d) => x(d.month))
      .attr('y', (d) => y(d.expenses))
      .attr('width', x.bandwidth())
      .attr('height', (d) => height - y(d.expenses))
      .attr('fill', 'green');

    // X-axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // Y-axis (use a common scale for income and expenses)
    svg.append('g').call(d3.axisLeft(y));

    // Cleanup
    return () => {
      d3.select(chartRef.current).selectAll('svg').remove();
    };
  }, []);

  return <div className='customChart' ref={chartRef}></div>;
};

export default CashFlowBarChart;
