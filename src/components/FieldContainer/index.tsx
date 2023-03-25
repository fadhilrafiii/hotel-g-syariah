import React, { ReactNode } from "react";

import "./FieldContainer.scss";

interface FieldContainerProps {
  label?: string | null;
  required?: boolean;
  disabled?: boolean;
  children: ReactNode | ReactNode[];
}

const FieldContainer = ({
  label = null,
  required = false,
  disabled = false,
  children,
}: FieldContainerProps) => {
  return (
    <div
      className={`relative flex flex-col ${disabled ? "disabled" : ""} ${
        required ? "required" : ""
      }`}
    >
      {label && (
        <label
          className={`inline-block pb-1 font-semibold !leading-none whitespace-nowrap ${
            disabled ? "text-gray-400" : ""
          }`}
        >
          {label}
        </label>
      )}
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default FieldContainer;
