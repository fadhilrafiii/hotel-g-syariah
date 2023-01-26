export enum SnackbarTypes {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export interface ISnackbarOpenParams {
  duration?: number;
  type?: SnackbarTypes;
  message: string;
}

export interface ISnackbarState {
  isOpen: boolean;
  duration: number;
  message: string;
  type: SnackbarTypes;
}
