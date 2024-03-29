import React, { useEffect, useRef, useState } from "react";
import useResize from "src/shared/hooks/useResize";
import Colors from "src/shared/types/color";

import "./PieChart.scss";

interface PieChartMeterProps {
  color?: string;
  value: number;
  thickness?: number;
  width?: number;
  order?: number;
  total?: number;
}

const PieChartMeter = ({
  width,
  color = Colors.Primary400,
  value,
  thickness = 15,
  total = 1,
  order = 1,
}: PieChartMeterProps) => {
  const [pieWidth, setPieWidth] = useState(0);
  const pieRef = useRef<HTMLDivElement>(null);

  const handlePieWidthChange = () => {
    if (pieRef?.current) setPieWidth(pieRef.current?.clientWidth || 0);
  };

  useResize(handlePieWidthChange);

  return (
    <div
      ref={pieRef}
      className="pie-chart inline-grid absolute inset-0 z-10 place-content-center w-full aspect-square text-5xl font-semibold"
      style={
        {
          zIndex: total - order,
          "--color": color,
          "--percentage": value,
          "--width": pieWidth,
          "--b": `${thickness}px`,
          width,
        } as React.CSSProperties
      }
    />
  );
};

export default PieChartMeter;
