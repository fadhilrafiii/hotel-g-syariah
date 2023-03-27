import React, { Dispatch, SetStateAction } from "react";
import Button from "src/components/Button";
import PlusOutlinedIcon from "src/components/icons/PlusOutlinedIcon";
import TrashTwoToneIcon from "src/components/icons/TrashTwoToneIcon";
import { OptionValue } from "src/components/Select";
import { Reservation } from "src/shared/types/reservation";
import { RoomOrder } from "src/shared/types/room";
import RoomOrderFormItem from "./RoomOrderFormItem";

interface RoomOrderFormProps {
  reservation: Reservation;
  setReservation: Dispatch<SetStateAction<Reservation>>;
}

const RoomOrderForm = ({ reservation, setReservation }: RoomOrderFormProps) => {
  const handleAddRoomOrder = () => {
    setReservation((prev: Reservation) => ({
      ...prev,
      rooms: [
        ...prev.rooms,
        {
          type: "",
          id: "",
          withBreakfast: false,
          transactionType: "",
          extra: [],
          price: 0,
        },
      ],
    }));
  };

  const handleChangeSelect = (
    roomIdx: number,
    name: string,
    value: OptionValue
  ) => {
    setReservation((prev: Reservation) => ({
      ...prev,
      rooms: prev.rooms.map((room: RoomOrder, idx: number) => {
        if (roomIdx === idx)
          return {
            ...room,
            [name]: value,
          };

        return room;
      }),
    }));
  };

  const handleChangeInput = (
    roomIdx: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setReservation((prev: Reservation) => ({
      ...prev,
      rooms: prev.rooms.map((room: RoomOrder, idx: number) => {
        if (roomIdx === idx)
          return {
            ...room,
            [name]: value,
          };

        return room;
      }),
    }));
  };

  const handleRemoveRoomOrderFormItem = (removeIdx: number) => {
    setReservation((prev) => ({
      ...prev,
      rooms: prev.rooms.filter((_, idx) => idx !== removeIdx),
    }));
  };

  const numOfRoomOrders = reservation.rooms.length;

  return (
    <div>
      <div className="flex flex-col gap-y-6 -mx-6 pb-6">
        {reservation.rooms.map((roomOrder: RoomOrder, idx: number) => {
          return (
            <div className="bg-blue-50 p-6 flex flex-col gap-y-6" key={idx}>
              <div className="flex justify-between items-center gap-x-6 border-b border-gray-300 pb-6">
                <h3 className="font-semibold text-2xl !leading-normal">
                  Pilih Kamar {idx + 1}
                </h3>
                <Button
                  variant={Button.Variant.Filled}
                  theme={Button.Theme.Danger}
                  startIcon={<TrashTwoToneIcon size={20} />}
                  className="drop-shadow-md"
                  onClick={() => handleRemoveRoomOrderFormItem(idx)}
                />
              </div>
              <RoomOrderFormItem
                roomOrder={roomOrder}
                onSelect={(name: string, value: OptionValue) =>
                  handleChangeSelect(idx, name, value)
                }
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeInput(idx, e)
                }
              />
            </div>
          );
        })}
      </div>
      <Button
        type="button"
        variant={Button.Variant.Filled}
        theme={Button.Theme.Secondary}
        startIcon={<PlusOutlinedIcon size={20} />}
        onClick={handleAddRoomOrder}
      >
        {numOfRoomOrders > 0 ? "Tambah Kamar Lain" : "Tambah Kamar"}
      </Button>
    </div>
  );
};

export default RoomOrderForm;
