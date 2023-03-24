import { RoomConditions } from "src/shared/types/room";

export const getStatusClassname = (status: RoomConditions) => {
  switch (status) {
    case RoomConditions.Terisi:
      return "bg-white";
    case RoomConditions.Dirty:
      return "bg-red-200 text-red-800";
    case RoomConditions.Clean:
      return "bg-green-200 text-green-800";
    case RoomConditions.VCI:
      return "bg-blue-200 text-blue-800";
    case RoomConditions.Repair:
      return "bg-blue-200 text-blue-800";
  }
};
