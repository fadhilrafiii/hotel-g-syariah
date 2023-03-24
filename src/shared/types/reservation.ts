import { Dayjs } from "dayjs";

export enum AddReservationSteps {
  RoomReservation = "Reservasi Kamar",
  FillOrderData = "Isi Data Pemesanan",
  ConfirmOrder = "Konfirmasi Pesanan",
}

export enum ReservationType {
  Individual = "Individu",
  Group = "Rombongan",
}

export interface Reservation {
  type: ReservationType;
  checkInDate?: Dayjs | null;
  checkOutDate?: Dayjs | null;
}
