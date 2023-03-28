import { Dayjs } from "dayjs";
import React, { Dispatch, SetStateAction } from "react";
import Button from "src/components/Button";
import DatePicker from "src/components/DatePicker";
import FieldContainer from "src/components/FieldContainer";
import InformationCircleOutlinedIcon from "src/components/icons/InformationCircleOutlinedIcon";
import SearchOutlinedIcon from "src/components/icons/SearchOutlinedIcon";
import InputNumber from "src/components/InputNumber";

import Colors from "src/shared/types/color";
import { Reservation, ReservationType } from "src/shared/types/reservation";
import dayjs from "src/shared/utils/dayjs";

import ReservationTypeToggler from "../../ReservationTypeToggler";
import RoomOrderForm from "../../RoomOrderForm";

const MAP_TOTAL_AVAILABLE_ROOM_BY_TYPE = [
  {
    label: "Standar Plus",
    total: 5,
  },
  {
    label: "Standar",
    total: 4,
  },
  {
    label: "Deluxe Plus",
    total: 15,
  },
  {
    label: "Deluxe",
    total: 10,
  },
  {
    label: "Superior",
    total: 0,
  },
  {
    label: "Junior Suite",
    total: null,
  },
];

interface RoomReservationPanel {
  reservation: Reservation;
  setReservation: Dispatch<SetStateAction<Reservation>>;
}

const RoomReservationPanel = ({
  reservation,
  setReservation,
}: RoomReservationPanel) => {
  const handleToggleReservationType = () => {
    setReservation((prev: Reservation) => ({
      ...prev,
      type:
        prev.type === ReservationType.Individual
          ? ReservationType.Group
          : ReservationType.Individual,
    }));
  };

  const handleChangeDate = (date: Dayjs | null, name: string) => {
    setReservation((prev: Reservation) => ({
      ...prev,
      [name]: date,
    }));
  };

  const handleChangeNumber = (name: string, value: number) => {
    setReservation((prev: Reservation) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <section id="rooms-filter">
        <div className="flex justify-between items-center mb-11">
          <div className="flex gap-x-6 items-center">
            <h3 className="text-2xl font-semibold text-gray-600">
              Reservasi Baru
            </h3>
            <ReservationTypeToggler
              type={reservation.type}
              onToggle={handleToggleReservationType}
            />
          </div>
          <div className="px-3 py-2 flex items-center gap-x-2 text-sm border border-blue-400 bg-blue-50 rounded-lg">
            <InformationCircleOutlinedIcon size={16} />
            {`Booking Detail: 1 Kamar - Rp 525.000`}
          </div>
        </div>
        <div className="flex flex-wrap -m-2 items-end pb-9">
          <div className="p-2 basis-1/6 flex-shrink-0 flex-grow">
            <FieldContainer label="Tanggal Check In" required>
              <DatePicker
                selected={reservation.checkInDate}
                minDate={dayjs()}
                onChange={(date: Dayjs | null) =>
                  handleChangeDate(date, "checkInDate")
                }
              />
            </FieldContainer>
          </div>
          <div className="p-2 basis-1/6 flex-shrink-0 flex-grow">
            <FieldContainer label="Tanggal Check Out" required>
              <DatePicker
                selected={reservation.checkOutDate}
                minDate={dayjs()}
                onChange={(date: Dayjs | null) =>
                  handleChangeDate(date, "checkOutDate")
                }
              />
            </FieldContainer>
          </div>
          <div className="p-2 basis-1/6 flex-shrink-0 flex-grow">
            <FieldContainer
              label="Jumlah Kamar"
              required
              disabled={reservation.type === ReservationType.Individual}
            >
              <InputNumber
                value={reservation.numOfRoom}
                onChange={(val: number) => handleChangeNumber("numOfRoom", val)}
                disabled={reservation.type === ReservationType.Individual}
              />
            </FieldContainer>
          </div>
          <div className="p-2 basis-1/6 flex-shrink-0 flex-grow">
            <FieldContainer label="Tamu Dewasa" required>
              <InputNumber
                value={reservation.numOfAdult}
                onChange={(val: number) =>
                  handleChangeNumber("numOfAdult", val)
                }
              />
            </FieldContainer>
          </div>
          <div className="p-2 basis-1/6 flex-shrink-0 flex-grow">
            <FieldContainer label="Tamu Anak-anak" required>
              <InputNumber
                value={reservation.numOfChildren}
                onChange={(val: number) =>
                  handleChangeNumber("numOfChildren", val)
                }
              />
            </FieldContainer>
          </div>
          <div className="p-2 basis-1/6 flex-shrink-0 flex-grow">
            <Button
              variant={Button.Variant.Filled}
              theme={Button.Theme.Primary}
              isCenter
              className="!w-full"
              startIcon={<SearchOutlinedIcon size={16} color={Colors.White} />}
            >
              Cari Kamar
            </Button>
          </div>
        </div>
        <hr className="h-[1px] w-full bg-gray-400" />
      </section>
      <section id="room-available">
        <div className="flex gap-6 pt-9 pb-3">
          {MAP_TOTAL_AVAILABLE_ROOM_BY_TYPE.map((room) => (
            <div
              key={room.label}
              className="bg-blue-50 rounded-lg basis-1/6 p-3 flex flex-col items-center gap-y-[6px]"
            >
              <div className="text-gray-600 font-semibold">{room.label}</div>
              <div
                className={`${
                  room.total === 0 ? "text-rose-500" : "text-blue-600"
                } text-2xl !leading-normal font-semibold`}
              >
                {room.total === null ? "-" : room.total}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="room-order-form" className="pb-8 pt-6">
        <RoomOrderForm
          reservation={reservation}
          setReservation={setReservation}
        />
      </section>
    </div>
  );
};

export default RoomReservationPanel;
