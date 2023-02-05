import { RoomStatus } from "src/shared/types/room";

export const getStatusClassname = (status: RoomStatus) => {
  switch (status) {
    case RoomStatus.CheckIn:
      return "bg-green-200 text-green-800";
    case RoomStatus.CheckOut:
      return "bg-gray-200 text-gray-800";
    case RoomStatus.Reservasi:
      return "bg-blue-200 text-blue-800";
  }
};
