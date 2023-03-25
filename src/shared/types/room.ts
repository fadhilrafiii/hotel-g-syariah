export enum RoomStatus {
  CheckIn = "Check In",
  CheckOut = "Check Out",
  Reservasi = "Reservasi",
}

export enum RoomConditions {
  Terisi = "Terisi",
  Dirty = "Dirty",
  Clean = "Clean",
  VCI = "VCI",
  Repair = "Repair",
}

export interface RoomOrder {
  type: string;
  id: string; //Nomor kamar
  withBreakfast: boolean;
  transactionType: string;
  otaType?: string;
  otaBookingNumber?: string;
  note?: string;
  instance?: string; // Instansi (GOV n Corp)
  extra: string[];
  price: number;
}
