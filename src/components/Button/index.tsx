import React, { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import "./Button.scss";

enum ButtonVariant {
  Filled = "filled",
  Outlined = "outlined",
}

enum ButtonTheme {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode | ReactNode[];
  isCenter?: boolean;
}

const Button = ({
  variant = ButtonVariant.Filled,
  theme = ButtonTheme.Primary,
  startIcon = null,
  endIcon = null,
  children = null,
  isCenter = false,
  className = "",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`${variant} ${theme} w-autog border px-3 py-2 rounded-md flex items-center gap-x-[6px] font-semibold ${
        isCenter ? "justify-center" : "justify-between"
      } ${className} ${disabled ? "opacity-40" : ""}`}
      {...props}
    >
      <div className="flex items-center gap-x-[6px] !leading-[1.1]">
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
