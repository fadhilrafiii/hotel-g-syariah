import Modal from "src/components/Modal";

interface StatusKamarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalStatusKamar = ({ isOpen, onClose }: StatusKamarModalProps) => {
  return (
    <Modal
      title="Penugasan Baru"
      isOpen={isOpen}
      onClose={onClose}
      onPrimaryButtonClick={() => console.log("CLICKED!")}
      onSecondaryButtonClick={onClose}
      primaryButtonText="Simpan Penugasan"
    >
      <div className="flex gap-4 py-2">
        <div className="w-1/4">
          <div className="font-semibold">Kamar</div>
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
          <div className="font-semibold">Staff</div>
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
          <div className="font-semibold">Status</div>
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
          <div className="font-semibold">Durasi Perbaikan</div>
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
        <div className="font-semibold">Note</div>
        <input
          type="text"
          placeholder="Note"
          className="w-full px-3 py-2 rounded-lg outline-none border-2 text-sm"
        />
      </div>
    </Modal>
  );
};

export default ModalStatusKamar;
