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
    <div className={`flex flex-col ${disabled ? "disabled" : ""}`}>
      {label && (
        <label className="inline-block pb-1 font-semibold !leading-none">
          {label}
          {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default FieldContainer;
