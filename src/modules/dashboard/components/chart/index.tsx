import React, {useEffect, useRef, useState} from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import {Chart} from "react-chartjs-2";
import {socket} from "@app/config/socket";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

let SIZE_CHART = 10;

export default function ChartCustom() {
  const chart = useRef<any>();
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [light, setLight] = useState(0);
  const [dataChartDraw, setDataChartDraw] = useState({
    labels: [],
    dataArrTem: [],
    dataArrHumi: [],
    dataArrLight: [],
  });
  const dataChart = {
    labels: dataChartDraw?.labels,
    datasets: [
      {
        type: "line",
        label: "Temperature",
        data: dataChartDraw?.dataArrTem,
        borderColor: "#f12711",
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 10,
        backgroundColor: "#f12711",
        fill: false,
        yAxisID: "y",
      },
      {
        type: "line",
        label: "Humidity",
        data: dataChartDraw?.dataArrHumi,
        fill: false,
        borderColor: "green",
        backgroundColor: "green",
        yAxisID: "y",
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        type: "bar",
        label: "Light",
        data: dataChartDraw?.dataArrLight,
        fill: false,
        // borderColor: 'rgb(54, 162, 235)',
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y1",
      },
    ],
  };
  useEffect(() => {
    // Lắng nghe sự kiện 'connect'
    socket.on("getDHT11", (data) => {
      console.log("DataDHT11", data);
      setTemperature(data[0] ?? 0);
      setHumidity(data[1] ?? 0);
    });
    socket.on("getBH1750", (data) => {
      console.log("DataBH1750", data);
      setLight(data);
    });
  }, [socket]);
  useEffect(() => {
    updateChart(new Date().toLocaleString(), [temperature, humidity, light]);
  }, [light, humidity, temperature]);

  function updateChart(label: any, data: any) {
    if (dataChartDraw?.labels) {
      const labelCopy: any = dataChartDraw?.labels?.slice();
      if (dataChartDraw?.labels.length > SIZE_CHART) {
        labelCopy.shift();
      }
      labelCopy.push(label);
      const datasetCopy0: any = dataChartDraw?.dataArrTem.slice();
      if (datasetCopy0?.length > SIZE_CHART) {
        datasetCopy0.shift();
      }
      datasetCopy0.push(data[0]);
      //
      const datasetCopy1: any = dataChartDraw?.dataArrHumi.slice();
      if (datasetCopy1?.length > SIZE_CHART) {
        datasetCopy1.shift();
      }
      datasetCopy1.push(data[1]);
      const datasetCopy2: any = dataChartDraw?.dataArrLight.slice();
      if (datasetCopy2?.length > SIZE_CHART) {
        datasetCopy2.shift();
      }
      datasetCopy2.push(data[2]);
      setDataChartDraw({
        ...dataChartDraw,
        labels: labelCopy,
        dataArrTem: datasetCopy0,
        dataArrHumi: datasetCopy1,
        dataArrLight: datasetCopy2,
      });
    }
  }
  return (
    <Chart
      type="bar"
      data={dataChart as any}
      ref={chart}
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Sensors Chart", // tên đồ thị (có thể sửa)
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            type: "linear",
            display: true,
            position: "left",
            title: {
              display: true,
              text: "Temperature or Humidity", // tên trục Y bên trái (Có thể sửa)
            },
          },
          y1: {
            beginAtZero: true,
            max: 1500,
            type: "linear",
            display: true,
            position: "right",
            title: {
              display: true,
              text: "Light", // tên trục y bên phải có thể sửa
            },
          },
        },
      }}
    />
  );
}
