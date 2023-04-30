const Nigeria = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={16}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <rect width={21} height={15} y={0.5} fill="#fff" rx={3} />
        <path
          fill="#0A6A30"
          fillRule="evenodd"
          d="M0 .5h7v15H0V.5Zm14 0h7v15h-7V.5Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <rect width={21} height={15} y={0.5} fill="#fff" rx={3} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Nigeria;
