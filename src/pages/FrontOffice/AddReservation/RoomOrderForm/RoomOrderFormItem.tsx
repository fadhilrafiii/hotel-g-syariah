import React from "react";
import FieldContainer from "src/components/FieldContainer";
import Input from "src/components/Input";
import Select, { OptionValue } from "src/components/Select";
import {
  ROOM_BREAKFAST_OPTIONS,
  ROOM_EXTRA_OPTIONS,
  ROOM_TYPE_OPTIONS,
} from "src/shared/constants/rooms";
import { TRANSACTION_TYPE_OPTIONS } from "src/shared/constants/transactions";
import { RoomOrder } from "src/shared/types/room";

interface RoomOrderFormItemProps {
  roomOrder: RoomOrder;
  onSelect: (name: string, value: OptionValue) => void;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RoomOrderFormItem = ({
  roomOrder,
  onSelect,
  onInput,
}: RoomOrderFormItemProps) => {
  return (
    <div className="flex flex-wrap -m-3">
      <div className="basis-1/6 max-w-[calc(100%/6)] p-3 flex-shrink-0 flex-grow">
        <FieldContainer label="Tipe Kamar" required>
          <Select
            value={roomOrder.type}
            options={ROOM_TYPE_OPTIONS}
            onChange={(value) => onSelect("type", value)}
          />
        </FieldContainer>
      </div>
      <div className="basis-1/6 max-w-[calc(100%/6)] p-3 flex-shrink-0 flex-grow">
        <FieldContainer label="Nomor Kamar" required>
          <Select
            value={roomOrder.id}
            options={ROOM_TYPE_OPTIONS}
            onChange={(value) => onSelect("id", value)}
          />
        </FieldContainer>
      </div>
      <div className="basis-1/6 max-w-[calc(100%/6)] p-3 flex-shrink-0 flex-grow">
        <FieldContainer label="Breakfast" required>
          <Select
            value={roomOrder.withBreakfast}
            options={ROOM_BREAKFAST_OPTIONS}
            onChange={(value) => onSelect("withBreakfast", value)}
          />
        </FieldContainer>
      </div>
      <div className="basis-1/6 max-w-[calc(100%/6)] p-3 flex-shrink-0 flex-grow">
        <FieldContainer label="Jenis Pembelian" required>
          <Select
            value={roomOrder.transactionType}
            options={TRANSACTION_TYPE_OPTIONS}
            onChange={(value) => onSelect("transactionType", value)}
          />
        </FieldContainer>
      </div>
      <div className="basis-1/6 max-w-[calc(100%/6)] p-3 flex-shrink-0 flex-grow">
        <FieldContainer
          label="Jenis OTA"
          required
          disabled={roomOrder.transactionType !== "OTA"}
        >
          <Select
            value={roomOrder.otaType || ""}
            options={TRANSACTION_TYPE_OPTIONS}
            placeholder="o.g. Traveloka..."
            onChange={(value) => onSelect("otaType", value)}
            disabled={roomOrder.transactionType !== "OTA"}
          />
        </FieldContainer>
      </div>
      <div className="basis-1/6 max-w-[calc(100%/6)] p-3 flex-shrink-0 flex-grow">
        <FieldContainer
          label="Kode Booking OTA"
          required
          disabled={roomOrder.transactionType !== "OTA"}
        >
          <Input
            value={roomOrder.otaBookingNumber}
            onChange={onInput}
            placeholder="o.g. 654874..."
            disabled={roomOrder.transactionType !== "OTA"}
          />
        </FieldContainer>
      </div>
      <div className="basis-1/3 p-3 flex-shrink-0 flex-grow">
        <FieldContainer label="Note">
          <Input
            value={roomOrder.note}
            placeholder="e.g. Bangunkan Saya Sahur Pukul 03.00..."
            onChange={onInput}
          />
        </FieldContainer>
      </div>
      <div className="basis-1/3 p-3 flex-shrink-0 flex-grow">
        <FieldContainer label="Instansi (GOV n Corp)">
          <Input
            value={roomOrder.note}
            placeholder="e.g. Dinas Pemerintahan..."
            onChange={onInput}
          />
        </FieldContainer>
      </div>
      <div className="basis-1/6 max-w-[calc(100%/6)] max-w p-3 flex-shrink-0 flex-grow">
        <FieldContainer label="Tambahan" required>
          <Select
            value={roomOrder.extra}
            options={ROOM_EXTRA_OPTIONS}
            multi
            onChange={(value) => onSelect("withBreakfast", value)}
          />
        </FieldContainer>
      </div>
      <div className="basis-1/6 max-w-[calc(100%/6)] p-3 flex-shrink-0 flex-grow">
        <FieldContainer label="Total Biaya">
          <Input readOnly value={0} className="bg-transparent" />
        </FieldContainer>
      </div>
    </div>
  );
};

export default RoomOrderFormItem;
