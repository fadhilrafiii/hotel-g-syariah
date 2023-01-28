import IconProps from "../shared";

const SwapCircleFilledIcon = ({
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
        d="M10 3.33337C6.32504 3.33337 3.33337 6.32504 3.33337 10C3.33337 13.675 6.32504 16.6667 10 16.6667C13.675 16.6667 16.6667 13.675 16.6667 10C16.6667 6.32504 13.675 3.33337 10 3.33337ZM10.8334 12.5H7.50004V14.5834L4.58337 11.6667L7.50004 8.75004V10.8334H10.8334V12.5ZM12.5 11.25V9.16671H9.16671V7.50004H12.5V5.41671L15.4167 8.33337L12.5 11.25Z"
        fill={color}
      />
      <path
        d="M9.99996 1.66663C5.39996 1.66663 1.66663 5.39996 1.66663 9.99996C1.66663 14.6 5.39996 18.3333 9.99996 18.3333C14.6 18.3333 18.3333 14.6 18.3333 9.99996C18.3333 5.39996 14.6 1.66663 9.99996 1.66663ZM9.99996 16.6666C6.32496 16.6666 3.33329 13.675 3.33329 9.99996C3.33329 6.32496 6.32496 3.33329 9.99996 3.33329C13.675 3.33329 16.6666 6.32496 16.6666 9.99996C16.6666 13.675 13.675 16.6666 9.99996 16.6666ZM12.5 5.41663V7.49996H9.16663V9.16663H12.5V11.25L15.4166 8.33329L12.5 5.41663ZM7.49996 8.74996L4.58329 11.6666L7.49996 14.5833V12.5H10.8333V10.8333H7.49996V8.74996Z"
        fill={color}
      />
    </svg>
  );
};

export default SwapCircleFilledIcon;