const CaretDownIcon = ({ size = 4, color = "#1E40AF", ...props }) => {
  return (
    <svg
      width={2 * size}
      height={size}
      viewBox="0 0 8 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.666016 0.666748L3.99935 4.00008L7.33268 0.666748H0.666016Z"
        fill={color}
      />
    </svg>
  );
};

export default CaretDownIcon;
