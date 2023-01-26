import { createContext, useContext, useState } from "react";
import {
  ISnackbarState,
  ISnackbarOpenParams,
  SnackbarTypes,
} from "src/shared/types/snackbar";

interface ISnackbarContext extends ISnackbarState {
  open: (params: ISnackbarOpenParams) => void;
  hide: () => void;
}

const SnackbarContext = createContext<ISnackbarContext>({
  isOpen: false,
  duration: 3000,
  type: SnackbarTypes.SUCCESS,
  message: "",
  open: () => null,
  hide: () => null,
});

export const SnackbarProvider = SnackbarContext.Provider;

export const useSnackbarContext = () => {
  const [snackbarState, setSnackbarState] = useState<ISnackbarState>({
    isOpen: false,
    message: "",
    type: SnackbarTypes.SUCCESS,
    duration: 3000,
  });

  const open = ({
    duration = 3000,
    type = SnackbarTypes.SUCCESS,
    message,
  }: ISnackbarOpenParams) => {
    setSnackbarState({
      isOpen: true,
      message,
      type,
      duration,
    });
  };

  const hide = () => {
    setSnackbarState({
      isOpen: false,
      message: "",
      type: SnackbarTypes.SUCCESS,
      duration: 3000,
    });
  };

  return {
    ...snackbarState,
    open,
    hide,
  };
};

export const useSnackbar = () => {
  const state = useContext(SnackbarContext);

  return state;
};

export default SnackbarContext;
