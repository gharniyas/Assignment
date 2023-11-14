import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Checkbox, Flex } from "antd";
import ChartContainer from "../chartContainer";
import "../../../index.css";
import { useState } from "react";

const CashFlowBarChart = ({ data }) => {
  const chartRef = useRef();

  const [inChecked, setInChecked] = useState(true);
  const [outChecked, setOutChecked] = useState(true);
  const data5 = data.slice(7, 12);
  const datas = [...data5,...data.slice(0, 1)];
  
  /* console.log(datas) */
  useEffect(() => {
    const margin = { top: 20, right: 200, bottom: 30, left: 10 };
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
      .domain(datas.map((d)=>d.month))
      .range([0, width])
      .padding(0.8);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(datas, (d) => Math.max(d.income, d.expenses))])
      .nice()
      .range([height-20, 0]);

    const barRadius = 5;

    if (inChecked) {
      svg
        .selectAll(".income-bar")
        .data(datas)
        .enter()
        .append("rect")
        .attr("class", "income-bar")
        .attr("x", (d) => x(d.month))
        .attr("y", (d) => y(d.income))
        .attr("width", x.bandwidth())
        .attr("height", (d) => height-20 - y(d.income))
        .attr("fill", "#06b85f")
        .attr("rx", barRadius)
        .attr("ry", barRadius);
    }

    if (outChecked) {
      svg
        .selectAll(".expenses-bar")
        .data(datas)
        .enter()
        .append("rect")
        .attr("class", "expenses-bar")
        .attr("x", (d) => x(d.month))
        .attr("y", (d) => y(d.expenses))
        .attr("width", x.bandwidth())
        .attr("height", (d) => height-20 - y(d.expenses))
        .attr("fill", "#43a903")
        .attr("rx", barRadius)
        .attr("ry", barRadius);
    }

    // X-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0));

    return () => {
      d3.select(chartRef.current).selectAll("svg").remove();
    };
  }, [data, inChecked, outChecked]);

  return (
    <ChartContainer
      headerContent={
        <Flex style={{ justifyContent: "space-between",alignItems:"center" }}>
          <header>Total cash flow</header>
          <Flex style={{ gap: "5px" }}>
            <Checkbox
              className="custom-checkbox custom-checkbox-in"
              checked={inChecked}
              onChange={() => setInChecked(!inChecked)}
            >
              In
            </Checkbox>
            <Checkbox
              className="custom-checkbox custom-checkbox-out"
              checked={outChecked}
              onChange={() => setOutChecked(!outChecked)}
              

            >
              Out
            </Checkbox>
          </Flex>
        </Flex>
      }
    ><div style={{flex: 1, height: '1px', backgroundColor: '#D3D3D3' }} />
      <div ref={chartRef} />
    </ChartContainer>
  );
};

export default CashFlowBarChart;
