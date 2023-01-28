import IconProps from "../shared";

const DashboardFilledIcon = ({
  size = 24,
  color = "#4B5563",
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.3"
        d="M4.16675 15.8333V4.16663H9.16675V15.8333H4.16675ZM15.8334 15.8333H10.8334V9.99996H15.8334V15.8333ZM15.8334 8.33329H10.8334V4.16663H15.8334V8.33329Z"
        fill={color}
      />
      <path
        d="M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM4.16667 15.8333V4.16667H9.16667V15.8333H4.16667ZM15.8333 15.8333H10.8333V10H15.8333V15.8333ZM15.8333 8.33333H10.8333V4.16667H15.8333V8.33333Z"
        fill={color}
      />
    </svg>
  );
};

export default DashboardFilledIcon;
