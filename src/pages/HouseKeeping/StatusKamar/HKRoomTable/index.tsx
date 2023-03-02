const HKRoomTable = () => {
  return (
    <div className="bg-blue-50 px-6 py-5 rounded-lg h-full">
      <div className="flex gap-2 font-medium">
        <input
          type="text"
          placeholder="Cari. . ."
          className="px-3 rounded-lg border-2 text-sm"
        />
        <button className="rounded-lg bg-blue-600 text-sm border-2 border-blue-50 text-white py-1 px-3">
          Cari
        </button>
        <button className="rounded-lg bg-white text-sm border-2 py-1 px-3">
          Edit Massal
        </button>
      </div>
      <table className="my-4">
        <thead className="text-sm">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th className="font-semibold px-2">No Kamar</th>
            <th className="font-semibold px-2">Tipe Kamar</th>
            <th className="font-semibold px-2">HK Status</th>
            <th className="font-semibold px-2">Staff HK</th>
            <th className="font-semibold px-2">Note</th>
            <th className="font-semibold px-2">Reservasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between">
        <p className="text-sm">Showing 1 to 10 of 122 results</p>
        <div className="flex">
          <button>{`<`}</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>. . . </button>
          <button>8</button>
          <button>9</button>
          <button>10</button>
          <button>{`>`}</button>
        </div>
      </div>
    </div>
  );
};

export default HKRoomTable;
