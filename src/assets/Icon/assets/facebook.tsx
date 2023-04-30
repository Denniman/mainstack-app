const Facebook = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#1877F2"
          d="m14.622 11.165.55-3.592h-3.446V5.242c0-.983.482-1.941 2.025-1.941h1.568V.243S13.896 0 12.537 0C9.698 0 7.843 1.72 7.843 4.835v2.738H4.687v3.592h3.156v8.684a12.517 12.517 0 0 0 3.883 0v-8.684h2.896Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Facebook;
