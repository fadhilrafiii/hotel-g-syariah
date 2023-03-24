import { ReactNode, useState, useRef, useEffect } from "react";
import useResize from "src/shared/hooks/useResize";
import PieChartMeter from "./PieChartMeter";

interface PieChartData {
  value: number;
  color?: string;
}

interface PieChartProps {
  data: PieChartData | PieChartData[];
  thickness?: number;
  centerContent?: ReactNode;
}

const PieChart = ({ centerContent, thickness, data }: PieChartProps) => {
  return (
    <div className="relative pie-container aspect-square">
      {Array.isArray(data) ? (
        <>
          {data.map((d: PieChartData, idx: number) => (
            <PieChartMeter
              key={idx}
              value={d.value}
              color={d.color}
              thickness={thickness}
              order={idx}
              total={data.length}
            />
          ))}
        </>
      ) : (
        <PieChartMeter
          value={data.value}
          color={data.color}
          thickness={thickness}
        />
      )}
      {centerContent && (
        <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
          {centerContent}
        </div>
      )}
    </div>
  );
};

export default PieChart;
