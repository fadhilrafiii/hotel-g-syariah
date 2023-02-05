import React from "react";
import RoomCard from "src/components/RoomCard";

import StandarPlusImg from "src/assets/images/room-standar-plus.png";
import StandarImg from "src/assets/images/room-standar.png";
import DeluxePlusImg from "src/assets/images/room-deluxe-plus.png";
import DeluxeImg from "src/assets/images/room-deluxe.png";
import SuperiorImg from "src/assets/images/room-superior.png";
import JuniorSuiteDoubleImg from "src/assets/images/room-junior-suite-double.png";

const Rooms = () => {
  return (
    <div className="flex -mx-3">
      <div className="px-3 basis-1/3">
        <RoomCard
          title="Standar Plus"
          totalAvailable={5}
          totalRoom={15}
          image={StandarPlusImg}
        />
      </div>
      <div className="px-3 basis-1/3">
        <RoomCard
          title="Standar"
          totalAvailable={4}
          totalRoom={14}
          image={StandarImg}
        />
      </div>
      <div className="px-3 basis-1/3">
        <RoomCard
          title="Deluxe Plus"
          totalAvailable={5}
          totalRoom={39}
          image={DeluxePlusImg}
        />
      </div>
      <div className="px-3 basis-1/3">
        <RoomCard
          title="Deluxe"
          totalAvailable={10}
          totalRoom={15}
          image={DeluxeImg}
        />
      </div>
      <div className="px-3 basis-1/3">
        <RoomCard
          title="Superior"
          totalAvailable={3}
          totalRoom={15}
          image={SuperiorImg}
        />
      </div>
      <div className="px-3 basis-1/3">
        <RoomCard
          title="Junior Suite Double"
          totalAvailable={2}
          totalRoom={2}
          image={JuniorSuiteDoubleImg}
        />
      </div>
    </div>
  );
};

export default Rooms;
