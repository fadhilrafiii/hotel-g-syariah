import { useState } from "react";
import Modal from "src/components/Modal";

const ModalStatusKamar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <button
        className="rounded-lg bg-blue-600 text-white px-3 py-1"
        onClick={() => setIsOpenModal(true)}
      >
        + Penugasan Baru
      </button>
      <Modal
        title="Penugasan Baru"
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onPrimaryButtonClick={() => console.log("CLICKED!")}
        onSecondaryButtonClick={() => setIsOpenModal(false)}
        primaryButtonText="Simpan Penugasan"
      >
        <div className="flex gap-4 py-2">
          <div className="w-1/4">
            <p className="font-semibold">Kamar</p>
            <select
              name=""
              id=""
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
            >
              <option value="">A 102</option>
              <option value="">A 103</option>
            </select>
          </div>
          <div className="w-1/4">
            <p className="font-semibold">Staff</p>
            <select
              name=""
              id=""
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
            >
              <option value="agus">Agus</option>
              <option value="tanjiro">Tanjiro</option>
            </select>
          </div>
          <div className="w-1/4">
            <p className="font-semibold">Status</p>
            <select
              name=""
              id=""
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
            >
              <option value="vci">VCI</option>
              <option value="clean">Clean</option>
              <option value="dirty">Dirty</option>
              <option value="perbaikan">Perbaikan</option>
            </select>
          </div>
          <div className="w-1/4">
            <p className="font-semibold">Durasi Perbaikan</p>
            <select
              name=""
              id=""
              className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
            >
              <option value="">Pilih Tanggal</option>
            </select>
          </div>
        </div>
        <div className="py-2">
          <p className="font-semibold">
            Note
          </p>
          <input
            type="text"
            placeholder="Note"
            className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ModalStatusKamar;
