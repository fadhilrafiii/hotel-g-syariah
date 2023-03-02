import { dummy } from "./constants";

const StatusHouseKeeping = () => {
  return (
    <section className="font-semibold flex items-center gap-2">
      <h3 className="text-2xl">Status Housekeeping</h3>
      <div className="flex gap-2">
        <span className="rounded-[24px] text-base py-1 px-4 border-2">
          Terisi:{dummy.terisi}
        </span>
        <span className="rounded-[24px] text-base py-1 px-4 bg-red-200 text-red-800">
          Dirty: {dummy.dirty}
        </span>
        <span className="rounded-[24px] text-base py-1 px-4 bg-green-200 text-green-800">
          Clean: {dummy.clean}
        </span>
        <span className="rounded-[24px] text-base py-1 px-4 bg-blue-200 text-blue-800">
          VCI: {dummy.vci}
        </span>
        <span className="rounded-[24px] text-base py-1 px-4 bg-yellow-200 text-yellow-800">
          Repair: {dummy.repair}
        </span>
      </div>
    </section>
  );
};

export default StatusHouseKeeping;
