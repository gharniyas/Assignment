import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "../charts/Styles.css";

import { Flex, Select } from "antd";
import ChartContainer from "../chartContainer";

const LineChart = ({ currentMonth, setCurrentMonth, data }) => {
  const chartRef = useRef();


  useEffect(() => {
    if (data?.length > 0) {
      const filteredDataarr = data.filter((d) => d.month === currentMonth);
      const filteredData = Array.isArray(filteredDataarr)
        ? filteredDataarr?.[0]?.monthdata
        : [];
      // console.log(filteredData, ":data1");
      const margin = { top: 20, right: 120, bottom: 30, left: 10 };
      const width = 800 - margin.left - margin.right;
      const height = 220 - margin.top - margin.bottom;

      const svg = d3
        .select(chartRef.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

        const x = d3
        .scaleBand()
        .domain(filteredData.map((d) => d.date).splice(0,12))
        .range([0, width])
        .padding(0.2);
    
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(filteredData, (d) => d.accounts)])
        .nice()
        .range([height, 0]);

      const line = d3
        .line()
        .x((d) => x(d.date) + x.bandwidth() / 2)
        .y((d) => y(d.accounts))
        .curve(d3.curveBasis); 

      svg
        .append("path")
        .datum(filteredData)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 2)
        .attr("d", line);

      // X-axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickSize(0));

      return () => {
        d3.select(chartRef.current).selectAll("svg").remove();
      };
    }
  }, [currentMonth, data]);

  const options = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  return (
    <ChartContainer
      headerContent={
        <Flex style={{ justifyContent: "space-between",alignItems:"center" }}>
          <header>Checking account</header>
          <Flex style={{ gap: "5px" }}>
            <Select
              options={[{ value: "manage", label: "Manage" }]}
              value={"manage"}
              onChange={(v) => {}}
            />
            <Select
              options={options}
              value={currentMonth}
              onChange={(v) => setCurrentMonth(v)}
            />
          </Flex>
        </Flex>
      }
    ><div style={{flex: 1, height: '1px', backgroundColor: '#D3D3D3' }} />
      <div ref={chartRef}></div>
    </ChartContainer>
  );
};

export default LineChart;
