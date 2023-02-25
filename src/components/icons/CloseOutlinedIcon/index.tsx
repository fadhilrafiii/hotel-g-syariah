import IconProps from "../shared";

const CloseOutlinedIcon = ({
  size = 24,
  color = "#F43F5E",
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 5L25 25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M25 5L5 25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseOutlinedIcon;
