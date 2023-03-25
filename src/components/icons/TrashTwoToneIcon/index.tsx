import IconProps from "../shared";

const TrashTwoToneIcon = ({
  size = 24,
  color = "#BE123C",
  ...props
}: IconProps) => {
  return (
    <svg
      width={(21 / 20) * size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.3"
        d="M7.16602 7.5H13.8327V15.8333H7.16602V7.5Z"
        fill={color}
      />
      <path
        d="M13.416 3.33333L12.5827 2.5H8.41602L7.58268 3.33333H4.66602V5H16.3327V3.33333H13.416ZM5.49935 15.8333C5.49935 16.75 6.24935 17.5 7.16602 17.5H13.8327C14.7493 17.5 15.4993 16.75 15.4993 15.8333V5.83333H5.49935V15.8333ZM7.16602 7.5H13.8327V15.8333H7.16602V7.5Z"
        fill={color}
      />
    </svg>
  );
};

export default TrashTwoToneIcon;
