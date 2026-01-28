import React from "react";

interface BannerProps {}

const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="size-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
      >
        <g mask='url("#SvgjsMask1024")' fill="none">
          <rect
            width="1440"
            height="560"
            x="0"
            y="0"
            fill='url("#SvgjsLinearGradient1025")'
          ></rect>
          <path
            d="M1440 0L1354.07 0L1440 116.31z"
            fill="rgba(255, 255, 255, .1)"
          ></path>
          <path
            d="M1354.07 0L1440 116.31L1440 146.89L1185.9199999999998 0z"
            fill="rgba(255, 255, 255, .075)"
          ></path>
          <path
            d="M1185.92 0L1440 146.89L1440 319.98L565.9200000000001 0z"
            fill="rgba(255, 255, 255, .05)"
          ></path>
          <path
            d="M565.92 0L1440 319.98L1440 366.25L321 0z"
            fill="rgba(255, 255, 255, .025)"
          ></path>
          <path d="M0 560L488.58 560L0 472.79z" fill="rgba(0, 0, 0, .1)"></path>
          <path
            d="M0 472.79L488.58 560L759.0799999999999 560L0 419.24z"
            fill="rgba(0, 0, 0, .075)"
          ></path>
          <path
            d="M0 419.24L759.0799999999999 560L1035.35 560L0 213.26000000000002z"
            fill="rgba(0, 0, 0, .05)"
          ></path>
          <path
            d="M0 213.26L1035.35 560L1198.83 560L0 174.60999999999999z"
            fill="rgba(0, 0, 0, .025)"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1024">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
          <linearGradient
            x1="15.28%"
            y1="-39.29%"
            x2="84.72%"
            y2="139.29%"
            gradientUnits="userSpaceOnUse"
            id="SvgjsLinearGradient1025"
          >
            <stop stop-color="#020617" offset="0"></stop>
            <stop stop-color="#020617" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Banner;
