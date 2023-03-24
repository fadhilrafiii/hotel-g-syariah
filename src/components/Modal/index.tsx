import React, { CSSProperties } from "react";
import CloseOutlinedIcon from "../icons/CloseOutlinedIcon";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode | React.ReactNode[];
  secondaryButtonText?: string;
  primaryButtonText?: string;
  overlayStyle?: CSSProperties;
  containerStyle?: CSSProperties;
  headerStyle?: CSSProperties;
  footerStyle?: CSSProperties;
  onPrimaryButtonClick: () => void;
  onSecondaryButtonClick: () => void;
  onClose: () => void;
}

const Modal = ({
  isOpen,
  title,
  children,
  secondaryButtonText = "Batal",
  primaryButtonText = "OK",
  onPrimaryButtonClick = () => {},
  onSecondaryButtonClick = () => {},
  overlayStyle,
  containerStyle,
  headerStyle,
  footerStyle,
  onClose,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        ...overlayStyle,
      }}
      className="fixed inset-0"
    >
      <div
        style={containerStyle}
        className="bg-white rounded-xl w-[55.6%] min-w-[720px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
      >
        <div
          style={headerStyle}
          className="flex justify-between items-center py-3 px-4"
        >
          <h3 className="text-2xl font-semibold leading-normal">{title}</h3>
          <span role="button" onClick={onClose}>
            <CloseOutlinedIcon />
          </span>
        </div>
        <div className="p-6">{children}</div>
        <div
          style={footerStyle}
          className="p-4 bg-gray-100 flex justify-end items-center gap-x-3"
        >
          <button
            onClick={onSecondaryButtonClick}
            className="border border-gray-400 outline-none text-gray-600 rounded-md py-2 px-3"
          >
            {secondaryButtonText}
          </button>
          <button
            onClick={onPrimaryButtonClick}
            className="font-semibold bg-blue-600 rounded-md drop-shadow-md py-2 px-3 text-white"
          >
            {primaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
