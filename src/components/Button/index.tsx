import React, { HTMLAttributes, ReactNode } from "react";

import "./Button.scss";

enum ButtonVariant {
  Filled = "filled",
  Outlined = "outlined",
}

enum ButtonTheme {
  Primary = "primary",
  Secondary = "secondary",
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode | ReactNode[];
  isCenter?: boolean;
}

const Button = ({
  variant = ButtonVariant.Filled,
  theme = ButtonTheme.Primary,
  startIcon = null,
  endIcon = null,
  children,
  isCenter = false,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${variant} ${theme} px-3 py-2 rounded-md flex items-center gap-x-[6px] font-semibold ${
        isCenter ? "justify-center" : "justify-between"
      } ${className}`}
      {...props}
    >
      <div className="flex items-center gap-x-[6px]">
        {startIcon}
        {children}
      </div>
      {endIcon}
    </button>
  );
};

Button.Theme = ButtonTheme;
Button.Variant = ButtonVariant;

export default Button;
