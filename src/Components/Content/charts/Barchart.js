import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data for months and values (you can replace this with your data)
    const data = [
      { month: 'Jan', value: 30 },
      { month: 'Feb', value: 40 },
      { month: 'Mar', value: 25 },
      { month: 'Apr', value: 55 },
      { month: 'May', value: 70 },
      { month: 'Jun', value: 45 },
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
      .padding(0.1);

    const y = d3.scaleLinear().domain([0, d3.max(data, (d) => d.value)]).nice().range([height, 0]);

    const barRadius = 20; // Adjust this value for the desired bar corner radius

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.month))
      .attr('y', (d) => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', (d) => height - y(d.value))
      .attr('fill', 'green')
      .attr('rx', barRadius) // Rounded corners for x-axis
      .attr('ry', barRadius); // Rounded corners for y-axis

    // X-axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    /* // Y-axis
    svg.append('g').call(d3.axisLeft(y)); */

    return () => {
      d3.select(chartRef.current).selectAll('svg').remove();
    };
  }, []);

  return <div className='customChart' ref={chartRef}></div>;
};

export default BarChart;
