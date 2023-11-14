import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import ChartContainer from "../chartContainer";
import { Button, Flex, Modal } from "antd";
import { useState } from "react";

const BarChart = ({ data, currentMonth }) => {
  const chartRef = useRef();

  const [modalOpen, setModalOpen] = useState(false);

  const months = data?.map((i) => i?.month);
  const curmon = data?.find((i) => i?.month === currentMonth)?.month;
  const curidx = months.findIndex((i) => i === curmon);
  useEffect(() => {
    let dataarr = [];
    let olderTotal = 0;
    let futureTotal = 0;
    let curTotal = 0;
    let curArr = [];
    data?.map((i, idx) => {
      if (idx < curidx) {
        olderTotal = olderTotal + i?.monthTotal;
      } else if (idx === curidx) {
        let thisArr = {
          month: ``,
          value: 0,
        };
        const isDivisibleBy7 = (num) => num % 7 === 0;
        i?.monthdata?.map((imx, index) => {
          if (isDivisibleBy7(index + 1)) {
            thisArr.month = `${thisArr.month}- ${
              imx?.date
            }`;
            thisArr.value = thisArr?.value + imx?.accounts;
            curArr.push(thisArr);
            thisArr = {
              month: ``,
              value: 0,
            };
            // console.log(index + 1, ":idx-1");
          } else {
            if (thisArr.month === "") {
              thisArr.month = `${(imx?.month).slice(0, 3)} ${imx?.date}`;
            }
            thisArr.value = thisArr?.value + imx?.accounts;
          }
        });
      } else if (idx > curidx) {
        futureTotal = +i?.monthTotal;
      }
      dataarr = [
        { month: "Older", value: olderTotal },
        ...curArr,
        { month: "Future", value: futureTotal },
      ];
    });
    
   
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
      .domain(dataarr.map((d) => d.month))
      .range([0, width])
      .padding(0.8)
      


    const y = d3
      .scaleLinear()
      .domain([0, d3.max(dataarr, (d) => d.value)])
      .nice()
      .range([height-50, 0])
      
      

    const barRadius = 5; 

    svg
      .selectAll(".bar")
      .data(dataarr)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.month))
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height-20 - y(d.value))
      .attr("fill", "#43a903")
      .attr("rx", barRadius) 
      .attr("ry", barRadius); 

    // X-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0));



    return () => {
      d3.select(chartRef.current).selectAll("svg").remove();
    };
  }, [data, curidx]);

  return (
    <>
      <ChartContainer
        headerContent={
          <Flex style={{ justifyContent: "space-between",alignItems:"center" }}>
            <header >Invoices owed to you</header>
            
            <Button onClick={() => setModalOpen(true)} style={{backgroundColor:"lightblue",color:"#06b85f", fontWeight:"bold"}}>
              New Sales Invoice
            </Button>
          </Flex>
          

        }
        
      ><div style={{flex: 1, height: '1px', backgroundColor: '#D3D3D3' }} />
        <div ref={chartRef} />
        
      </ChartContainer>
      <Modal open={modalOpen} onCancel={() => setModalOpen(false)}>
        Form Modal
      </Modal>
    </>
  );
};

export default BarChart;
