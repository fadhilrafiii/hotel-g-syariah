import React, { useEffect, useRef, useState } from "react";
import PieChart from "src/components/PieChart";
import { dummy } from "./constants";

import "./TransactionChart.scss";

const TransactionChart = () => {
  const [pieWidth, setPieWidth] = useState(0);
  const pieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pieRef?.current) setPieWidth(pieRef.current?.clientWidth || 0);
  }, [pieRef?.current]);

  console.log(pieWidth);
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
                  86
                </h3>
                <p className="text-xs text-gray-700">Penjualan</p>
              </>
            }
            data={dummy}
            thickness={15}
          />
        </div>
        <div className="basis-1/2 aspect-square px-[22px]"></div>
      </div>
    </div>
  );
};

export default TransactionChart;
