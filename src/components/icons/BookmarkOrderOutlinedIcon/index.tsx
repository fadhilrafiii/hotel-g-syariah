import IconProps from "../shared";

const BookmarkOrderOutlinedIcon = ({
  size = 24,
  color = "#1E40AF",
  ...props
}: IconProps) => {
  return (
    <svg
      width={(30 / 24) * size}
      height={size}
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27 6H22.5V3C22.5 1.35 21.15 0 19.5 0H10.5C8.85 0 7.5 1.35 7.5 3V6H3C1.35 6 0 7.35 0 9V24H30V9C30 7.35 28.65 6 27 6ZM10.5 3H19.5V6H10.5V3ZM27 21H3V16.5H6V18H9V16.5H21V18H24V16.5H27V21ZM24 13.5V12H21V13.5H9V12H6V13.5H3V9H27V13.5H24Z"
        fill={color}
      />
    </svg>
  );
};

export default BookmarkOrderOutlinedIcon;
