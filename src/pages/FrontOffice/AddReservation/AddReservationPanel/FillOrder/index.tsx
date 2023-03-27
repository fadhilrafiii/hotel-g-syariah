import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import InformationCircleOutlinedIcon from "src/components/icons/InformationCircleOutlinedIcon";
import Select from "src/components/Select";
import { Reservation } from "src/shared/types/reservation";
import { isMatch } from "src/shared/utils/string";
import { guestOptionsDummy } from "./dummy";

interface FillOrderProps {
  reservation: Reservation;
  setReservation: Dispatch<SetStateAction<Reservation>>;
}

const FillOrder = ({ reservation, setReservation }: FillOrderProps) => {
  const [searchGuestName, setSearchGuestName] = useState("");

  const searchOptions = useMemo(() => {
    return guestOptionsDummy.filter(
      (opt) =>
        isMatch(opt.label, searchGuestName) ||
        isMatch(opt.value.toString(), searchGuestName)
    );
  }, [searchGuestName]);

  return (
    <div>
      <div className="flex justify-between items-center -mx-3 gap-y-4 flex-wrap">
        <div className="flex items-center gap-x-6 px-3 flex-grow">
          <h3 className="text-gray-600 font-semibold text-2xl flex-shrink-0">
            Data Tamu
          </h3>
          <div className="flex-grow basis-2/3 flex-shrink-0">
            <Select
              value={searchGuestName}
              onChange={(value) => setSearchGuestName(value as string)}
              withSearch
              onSearch={(value) => setSearchGuestName(value as string)}
              options={searchOptions}
            />
          </div>
        </div>
        <div className="flex-grow basis-1/2 flex justify-end px-3">
          <div className="px-3 py-2 flex items-center gap-x-2 text-sm border border-blue-400 bg-blue-50 rounded-lg">
            <InformationCircleOutlinedIcon size={16} />
            {`Booking Detail: 1 Kamar - Rp 525.000`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillOrder;
