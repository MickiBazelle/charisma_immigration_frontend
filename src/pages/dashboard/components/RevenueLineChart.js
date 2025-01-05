import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement);

function RevenueLineChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        borderWidth: 1,
        label: "Sign ups",
        data: [10, 10, 14, 19, 25, 20, 45, 68, 56, 74, 92, 100],
        fill: false,
        borderColor: "#36a2eb",
      },
      {
        label: "Revenue",
        borderWidth: 1,
        data: [20, 20, 34, 56, 63, 20, 20, 45, 78, 45, 80, 110],
        borderColor: "#ccdc61",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="px-3 py-2 h-[250px]">
      <Line height={170} width={600} data={data} options={options} />
    </div>
  );
}

export default RevenueLineChart;
