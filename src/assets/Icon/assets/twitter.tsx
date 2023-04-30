const Twitter = ({ ...props }) => {
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
          fill="#1DA1F2"
          d="M6.45 18.333c7.74 0 11.974-6.412 11.974-11.973 0-.183 0-.364-.012-.544a8.562 8.562 0 0 0 2.1-2.179 8.401 8.401 0 0 1-2.418.662 4.224 4.224 0 0 0 1.85-2.327c-.825.49-1.73.835-2.672 1.021a4.214 4.214 0 0 0-3.068-1.326c-2.31 0-4.212 1.901-4.212 4.212 0 .32.036.64.109.952a11.953 11.953 0 0 1-8.673-4.396A4.229 4.229 0 0 0 2.73 8.052c-.67-.02-1.324-.2-1.91-.527v.054c.001 1.995 1.42 3.73 3.377 4.125-.62.169-1.27.194-1.9.072A4.222 4.222 0 0 0 6.227 14.7 8.446 8.446 0 0 1 0 16.443a11.915 11.915 0 0 0 6.45 1.887"
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

export default Twitter;