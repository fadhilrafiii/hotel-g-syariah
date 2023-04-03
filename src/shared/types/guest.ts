export enum BloodType {
  O = "O",
  A = "A",
  B = "B",
  AB = "AB",
}

export enum Gender {
  Male = "Laki - laki",
  Female = "Perempuan",
}

export enum MarriageStatus {
  Married = "Kawin",
  NotMarried = "Belum Kawin",
  Divorced = "Cerai",
}

export enum IDType {
  KTP = "KTP",
  SIM = "SIM",
  Passport = "Paspor",
}

export interface Guest {
  name: string;
  nik: string;
  birthPlace: string;
  birthDate: string;
  gender: Gender;
  bloodType?: BloodType;
  nationality: string;
  countryOrigin: string;
  province: string;
  city: string;
  address: string;
  religion: string;
  marriageStatus: MarriageStatus;
  job: string;
  phoneNumber: string;
  email?: string;
  instance?: string;
  idType: IDType;
  idImg: string;
}
