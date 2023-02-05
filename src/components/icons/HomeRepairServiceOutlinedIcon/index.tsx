import IconProps from "../shared";

const HomeRepairServiceOutlinedIcon = ({
  size = 24,
  color = "#92400E",
  ...props
}: IconProps) => {
  return (
    <svg
      width={(21.6 / 27) * size}
      height={size}
      viewBox="0 0 22 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.5 0.5H3.5C1.85 0.5 0.5 1.85 0.5 3.5V27.5L11 23L21.5 27.5V3.5C21.5 1.85 20.15 0.5 18.5 0.5ZM18.5 23L11 19.73L3.5 23V3.5H18.5V23Z"
        fill={color}
      />
    </svg>
  );
};

export default HomeRepairServiceOutlinedIcon;
