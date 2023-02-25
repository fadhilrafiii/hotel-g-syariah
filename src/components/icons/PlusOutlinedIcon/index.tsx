import Colors from "src/shared/types/color";
import IconProps from "../shared";

const PlusOutlinedIcon = ({
  size = 24,
  color = Colors.Gray600,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path
        d="M15.8332 10.8334H10.8332V15.8334H9.1665V10.8334H4.1665V9.16669H9.1665V4.16669H10.8332V9.16669H15.8332V10.8334Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusOutlinedIcon;
