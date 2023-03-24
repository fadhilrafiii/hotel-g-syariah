import Colors from "src/shared/types/color";
import IconProps from "../shared";

const LogoutOutlinedIcon = ({
  size = 24,
  color = Colors.Gray800,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.5 8L19.385 10.115L21.755 12.5H9.5V15.5H21.755L19.385 17.87L21.5 20L27.5 14L21.5 8ZM3.5 3.5H14V0.5H3.5C1.85 0.5 0.5 1.85 0.5 3.5V24.5C0.5 26.15 1.85 27.5 3.5 27.5H14V24.5H3.5V3.5Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoutOutlinedIcon;
