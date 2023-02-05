import IconProps from "../shared";

const HotelOutlinedIcon = ({
  size = 24,
  color = "#166534",
  ...props
}: IconProps) => {
  return (
    <svg
      width={(34 / 23) * size}
      height={size}
      viewBox="0 0 34 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14ZM9.5 8C10.325 8 11 8.675 11 9.5C11 10.325 10.325 11 9.5 11C8.675 11 8 10.325 8 9.5C8 8.675 8.675 8 9.5 8ZM27.5 3.5H15.5V15.5H3.5V0.5H0.5V23H3.5V18.5H30.5V23H33.5V9.5C33.5 6.185 30.815 3.5 27.5 3.5ZM30.5 15.5H18.5V6.5H27.5C29.15 6.5 30.5 7.85 30.5 9.5V15.5Z"
        fill={color}
      />
    </svg>
  );
};

export default HotelOutlinedIcon;
