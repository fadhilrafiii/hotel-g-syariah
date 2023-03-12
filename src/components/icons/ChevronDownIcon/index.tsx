import Colors from "src/shared/types/color";
import IconProps from "../shared";

const ChevronDownIcon = ({
  size = 24,
  color = Colors.Gray600,
  ...props
}: IconProps) => {
  return (
    <svg
      width={(10 / 7) * size}
      height={size}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.175 0.649994L5 4.47499L8.825 0.649994L10 1.83333L5 6.83333L0 1.83333L1.175 0.649994Z"
        fill="#4B5563"
      />
    </svg>
  );
};

export default ChevronDownIcon;
