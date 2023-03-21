import { useState } from "react";
import Modal from "src/components/Modal";

const AddLinenModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <button
        className="rounded-lg bg-blue-600 text-white px-3 py-1"
        onClick={() => setIsOpenModal(true)}
      >
        + Tambah Linen Baru
      </button>
      <Modal
        title="Linen Baru"
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onPrimaryButtonClick={() => console.log("CLICKED!")}
        onSecondaryButtonClick={() => setIsOpenModal(false)}
        primaryButtonText="Simpan Sebagai Diambil"
      >
        <div className="flex gap-4 py-2">
          <div className="w-2/4">
            <p className="font-semibold">Vendor Linen</p>
            <input
              type="text"
              placeholder="e.g Indah Laundry..."
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
            />
          </div>
          <div className="w-1/4">
            <p className="font-semibold">Tanggal Masuk</p>
            <input
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
              type="date"
            />
          </div>
          <div className="w-1/4">
            <p className="font-semibold">Tanggal Jadi</p>
            <input
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
              type="date"
            />
          </div>
        </div>
        <p className="font-semibold text-lg py-4">Item Linen</p>
        <div className="border-b-2 mb-4"></div>
        <div className="flex gap-4 py-2">
          <div className="w-3/4">
            <p className="font-semibold">Item</p>
            <input
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
              type="text"
              value={"Sprei"}
              placeholder="e.g Sprei..."
            />
          </div>
          <div className="w-1/4">
            <p className="font-semibold">Jumlah</p>
            <input
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
              type="number"
              value={69}
            />
          </div>
        </div>
        <div className="flex gap-4 py-2">
          <div className="w-3/4">
            <p className="font-semibold">Item</p>
            <input
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
              type="text"
              value={"Sarung Bantal"}
              placeholder="e.g Sprei..."
            />
          </div>
          <div className="w-1/4">
            <p className="font-semibold">Jumlah</p>
            <input
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
              type="number"
              value={25}
            />
          </div>
        </div>
        <div className="flex gap-4 py-2">
          <div className="w-3/4">
            <p className="font-semibold">Item</p>
            <input
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
              type="text"
              placeholder="e.g Sprei..."
            />
          </div>
          <div className="w-1/4">
            <p className="font-semibold">Jumlah</p>
            <input
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
              type="number"
            />
          </div>
        </div>
        <button className="my-4 py-2 px-4 rounded-lg font-semibold bg-gray-100">+ Tambah Item Lain</button>
        <div className="w-1/3 py-4">
          <p className="font-semibold">Harga</p>
          <input
            className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
            type="number"
            placeholder="Rp"
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddLinenModal;
