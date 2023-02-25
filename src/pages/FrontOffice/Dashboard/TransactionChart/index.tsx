import React, { useEffect, useMemo, useRef, useState } from "react";
import PieChart from "src/components/PieChart";
import { dummy } from "./constants";

import "./TransactionChart.scss";

const TransactionChart = () => {
  const [pieWidth, setPieWidth] = useState(0);
  const pieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pieRef?.current) setPieWidth(pieRef.current?.clientWidth || 0);
  }, [pieRef?.current]);

  const totalData = useMemo(
    () => dummy.reduce((total, data) => total + data.value, 0),
    []
  );
  const chartData = useMemo(() => {
    let totalPrevValue = 0;
    return dummy.map((data, idx: number) => {
      const currValue = ((data.value + totalPrevValue) / totalData) * 100;
      totalPrevValue = data.value + totalPrevValue;
      return {
        value: currValue,
        color: data.color,
      };
    });
  }, []);

  console.log(chartData);

  return (
    <div className="bg-blue-50 px-6 py-5 rounded-lg h-full">
      <h3 className="text-2xl font-semibold !leading-normal mb-11">
        Transaksi Penjualan
      </h3>
      <div className="flex -mx-[22px]">
        <div className="basis-1/2 px-[22px]">
          <PieChart
            centerContent={
              <>
                <h3 className="text-gray-700 text-5xl font-semibold !leading-none">
                  {totalData}
                </h3>
                <p className="text-xs text-gray-700">Penjualan</p>
              </>
            }
            data={chartData}
            thickness={20}
          />
        </div>
        <div className="basis-1/2 px-[22px]">
          {dummy.map((data, key: number) => (
            <div
              key={key}
              className={`${
                key < 4 ? "border-b" : ""
              } border-gray-400 flex items-center justify-between py-[10px]`}
            >
              <div className="flex gap-x-2 items-center">
                <span
                  style={{ backgroundColor: data.color }}
                  className="w-4 h-4 rounded-full"
                />
                <div>
                  <div className="text-base text-gray-600 font-semibold uppercase">
                    {data.label}
                  </div>
                  <div className="text-xs text-gray-600">{data.subLabel}</div>
                </div>
              </div>
              <span className="text-2xl text-gray-600 font-semibold">
                {data.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionChart;
