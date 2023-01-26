import { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<SVGElement> {
  size?: number;
  color?: string;
  colorSecondary?: string;
}

export default IconProps;
