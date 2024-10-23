interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.2773 7.92821L37.1591 3.47607L61.0954 53.9256C62.6046 57.1069 61.132 60.8565 57.806 62.3001C54.4236 63.7685 50.4405 62.2848 48.9868 59.0152L26.2773 7.92821Z"
        fill="url(#paint0_linear_329_16)"
      />
      <path
        d="M26.5231 3.86536C26.5878 3.72906 26.7536 3.66611 26.8984 3.72288L37.6229 7.92822L14.9527 58.8686C13.4978 62.1373 9.51504 63.6202 6.13275 62.1518C2.80608 60.7079 1.33316 56.9575 2.8429 53.7756L26.5231 3.86536Z"
        fill="url(#paint1_linear_329_16)"
      />
      <path
        d="M31.9499 10.9891C35.3239 10.9891 38.059 8.80895 38.059 6.11957C38.059 3.43018 35.3239 1.25 31.9499 1.25C28.576 1.25 25.8408 3.43018 25.8408 6.11957C25.8408 8.80895 28.576 10.9891 31.9499 10.9891Z"
        fill="#CF052C"
      />
      <path
        d="M24.7457 36.7694L49.189 23.4869C52.2022 21.8494 56.0341 22.9116 57.6655 25.8364C59.1544 28.5062 58.2866 31.8208 55.6579 33.5043L13.9141 60.2413L24.7457 36.7694Z"
        fill="url(#paint2_linear_329_16)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_329_16"
          x1="35.1425"
          y1="10.5103"
          x2="56.7483"
          y2="62.3363"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CF052C" />
          <stop offset="1" stopColor="#680014" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_329_16"
          x1="29.0411"
          y1="12.5195"
          x2="7.85512"
          y2="62.8773"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CF052C" />
          <stop offset="1" stopColor="#680014" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_329_16"
          x1="19.4412"
          y1="49.1108"
          x2="56.2569"
          y2="24.1019"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CF052C" />
          <stop offset="1" stopColor="#680014" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
