import Modal from "src/components/Modal";

interface LostFoundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalLostFound = ({ isOpen, onClose }: LostFoundModalProps) => {
  return (
    <Modal
      title="Tambah Barang Temuan Baru"
      isOpen={isOpen}
      onClose={onClose}
      onPrimaryButtonClick={() => console.log("CLICKED!")}
      onSecondaryButtonClick={onClose}
      primaryButtonText="Simpan"
    >
      <div className="flex gap-4 py-2">
        <div className="w-3/4">
          <p className="font-semibold">
            Nama Barang <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            placeholder="e.g. Charger..."
            className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
          />
        </div>
        <div className="w-1/4">
          <p className="font-semibold">
            Penemu <span className="text-red-500">*</span>
          </p>
          <select
            name=""
            id=""
            className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
          >
            <option value="agus">Agus</option>
            <option value="tanjiro">Tanjiro</option>
          </select>
        </div>
      </div>
      <div className="py-2">
        <p className="font-semibold">
          Deskripsi Barang <span className="text-red-500">*</span>
        </p>
        <input
          type="text"
          placeholder="e.g. Samsung warna putih 33w..."
          className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
        />
      </div>
      <div className="flex gap-4 py-2">
        <div className="w-1/2">
          <p className="font-semibold">
            Waktu Penemuan <span className="text-red-500">*</span>
          </p>
          <input
            type="date"
            className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
          />
        </div>
        <div className="w-1/2">
          <p className="font-semibold">
            Lokasi Penemuan <span className="text-red-500">*</span>
          </p>
          <select
            name=""
            id=""
            className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
          >
            <option value="">Lokasi Penemuan...</option>
            <option value=""></option>
          </select>
        </div>
      </div>
    </Modal>
  );
};

export default ModalLostFound;
