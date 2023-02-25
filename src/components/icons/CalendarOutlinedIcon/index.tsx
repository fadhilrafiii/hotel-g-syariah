import Colors from "src/shared/types/color";
import IconProps from "../shared";

const CalendarOutlinedIcon = ({
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
        d="M5.83333 9.16665H7.5V10.8333H5.83333V9.16665ZM17.5 4.16665V15.8333C17.5 16.7583 16.7583 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2753 2.5 15.8333V4.16665C2.5 3.24998 3.25 2.49998 4.16667 2.49998H5V0.833313H6.66667V2.49998H13.3333V0.833313H15V2.49998H15.8333C16.2754 2.49998 16.6993 2.67557 17.0118 2.98813C17.3244 3.3007 17.5 3.72462 17.5 4.16665ZM4.16667 5.83331H15.8333V4.16665H4.16667V5.83331ZM15.8333 15.8333V7.49998H4.16667V15.8333H15.8333ZM12.5 10.8333H14.1667V9.16665H12.5V10.8333ZM9.16667 10.8333H10.8333V9.16665H9.16667V10.8333Z"
        fill={color}
      />
    </svg>
  );
};

export default CalendarOutlinedIcon;
