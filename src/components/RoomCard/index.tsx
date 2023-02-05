import { useEffect, useRef, useState } from "react";

interface RoomCardProps {
  image: string;
  title: string;
  totalAvailable: number;
  totalRoom: number;
}

const RoomCard = ({
  image,
  title,
  totalAvailable,
  totalRoom,
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
            className="bg-green-500 rounded-[18px] absolute top-0 left-0 bottom-0"
            style={{
              width: (totalAvailable / totalRoom) * totalAvailableMeter,
            }}
          />
        </div>
        <div className="text-gray-600 text-sm ml-auto text-right">
          {totalAvailable} / {totalRoom}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
