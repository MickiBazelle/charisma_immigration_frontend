import React from "react";
import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

function CourseStatPieChart() {
  const data = {
    labels: ["Ghana", "India", "Nigeria", "Liberia", "Pakistan"],
    datasets: [
      {
        label: "# of Clients",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "#ff3f69",
          "#ffc235",
          "#36a2eb",
          "#8a669c",
          "#ccdc61",
        ],
        borderColor: ["#F89CB0", "#F8DA94", "#8FCEF8", "#97879F", "#CFD5A9"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "left",
        usePointStyle: true,
        labels: {
          boxWidth: 10,
          padding: 15,
          color: "#DFDFDF",
          usePointStyle: true,
          font: {
            size: 10,
          },
        },
      },
    },
    legend: {
      display: true,
      responsive: true,
      position: "bottom",
      labels: {
        boxWidth: 10,
        padding: 40,
        font: {
          size: 34,
        },
      },
    },
    align: "center",
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div className="pt-4 h-[170px] items-center">
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
}

export default CourseStatPieChart;
