import React from "react";
import Chart from "react-apexcharts";
import "./Graphics.css";

type Props = {
  series?: [];
  categories?: [];
};

export function Graphics(props: Props) {
  const [color, setColor] = React.useState<string>("");

  React.useEffect(() => {
    let s = localStorage.getItem("style");
    if (s) setColor("dark");
    else setColor("light");
  }, [color]);

  const seriesA = [
    { name: "teste", data: [5, 8, 9, 9] },
    { name: "teste2", data: [5, 5, 9, 9] },
    { name: "teste3", data: [5, 8, 4, 9] },
  ];

  const seriesD = [2, 5, 6, 9];

  const categories = ["6", "6", "8", "5", "6"];

  //   let { series, categories } = props;

  let stateA = {
    options: {
      chart: {
        id: "area",
      },
      xaxis: {
        categories: categories,
      },
      theme: {
        mode: color,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    series: seriesA,
  };

  let stateD = {
    options: {
      chart: {
        id: "area",
      },
      xaxis: {
        categories: categories,
      },
      theme: {
        mode: color,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    series: seriesD,
  };

  return (
    <div className="row">
      <div className="m">
        <Chart
          options={stateA.options}
          series={stateA.series}
          type="area"
          height={350}
          width={1200}
        />
      </div>
      <div className="m">
        <Chart
          options={stateD.options}
          series={stateD.series}
          type="donut"
          height={350}
          width={350}
        />
      </div>
    </div>
  );
}
