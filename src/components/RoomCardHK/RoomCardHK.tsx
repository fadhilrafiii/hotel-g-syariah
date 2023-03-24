import { useEffect, useRef, useState } from "react";

interface RoomCardProps {
  image: string;
  title: string;
  totalTerisi: number;
  totalDirty: number;
  totalClean: number;
  totalVCI: number;
  totalRepair: number;
  totalRoom: number;
  terisi: number;
  dirty: number;
  clean: number;
  vci: number;
  repair: number;
}

const RoomCardHK = ({
  image,
  title,
  totalTerisi,
  totalDirty,
  totalRoom,
  totalClean,
  totalVCI,
  totalRepair,
  terisi,
  dirty,
  clean,
  vci,
  repair,
}: RoomCardProps) => {
  const meterRef = useRef<HTMLDivElement>(null);
  const [totalAvailableMeter, setTotalAvailableMeter] = useState(0);

  useEffect(() => {
    if (meterRef.current) setTotalAvailableMeter(meterRef.current.clientWidth);
  }, [meterRef.current]);

  return (
    <div className="rounded-lg min-w-[125px] overflow-hidden w-full">
      <img alt={title} src={image} className="w-full h-[130px]" />
      <div className="p-3 bg-blue-50">
        <div className="text-sm font-semibold mb-2">{title}</div>
        <div
          ref={meterRef}
          className="relative w-full rounded-[18px] bg-white h-2 mb-6"
        >
          <div
            className="bg-white rounded-[18px] absolute top-0 left-0 bottom-0"
            style={{
              width: ((totalTerisi + totalDirty + totalClean + totalVCI + totalRepair) / totalRoom) * totalAvailableMeter,
            }}
          />
          <div
            className="bg-red-500 rounded-[18px] absolute top-0 left-0 bottom-0"
            style={{
              width: ((totalDirty + totalClean + totalVCI + totalRepair) / totalRoom) * totalAvailableMeter,
            }}
          />
          <div
            className="bg-green-500 rounded-[18px] absolute top-0 left-0 bottom-0"
            style={{
              width: ((totalClean + totalVCI + totalRepair) / totalRoom) * totalAvailableMeter,
            }}
          />
          <div
            className="bg-blue-500 rounded-[18px] absolute top-0 left-0 bottom-0"
            style={{
              width: ((totalVCI + totalRepair) / totalRoom) * totalAvailableMeter,
            }}
          />
          <div
            className="bg-yellow-500 rounded-[18px] absolute top-0 left-0 bottom-0"
            style={{
              width: ((totalRepair) / totalRoom) * totalAvailableMeter,
            }}
          />
        </div>
        <div className="flex justify-between text-sm font-medium py-1">
          <div>Terisi</div>
          <div className="rounded-[24px] text-base py-1 px-3 bg-white">
            {terisi}
          </div>
        </div>
        <div className="flex justify-between text-sm font-medium py-1">
          <div>Dirty</div>
          <div className="rounded-[24px] text-base py-1 px-3 bg-red-200 text-red-800">
            {dirty}
          </div>
        </div>
        <div className="flex justify-between text-sm font-medium py-1">
          <div>Clean</div>
          <div className="rounded-[24px] text-base py-1 px-3 bg-green-200 text-green-800">
            {clean}
          </div>
        </div>
        <div className="flex justify-between text-sm font-medium py-1">
          <div>VCI</div>
          <div className="rounded-[24px] text-base py-1 px-3 bg-blue-200 text-blue-800">
            {vci}
          </div>
        </div>
        <div className="flex justify-between text-sm font-medium py-1">
          <div>Repair</div>
          <div className="rounded-[24px] text-base py-1 px-3 bg-yellow-200 text-yellow-800">
            {repair}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCardHK;
