import React from "react";

type MainSectionProps = {
  children: React.ReactNode;
  background?: "shiny" | "wave" | "sharp" | "sprinkle" | "none";
  className?: string;
};

export default function MainSection({
  children,
  background = "sharp",
  className = "",
}: MainSectionProps) {
  return (
    <section className={`relative bg-zinc-100 ${className}`}>
      {/* Background pattern */}
      {background === "shiny" && <Shiny />}
      {background === "sharp" && <Sharp />}
      {background === "sprinkle" && <Sprinkle />}
      <main className="relative mx-auto flex max-w-screen-xl flex-col">
        {children}
      </main>
    </section>
  );
}

const Shiny = () => {
  return (
    <svg
      className="absolute inset-0 -z-10 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      // xmlns:svgjs="http://svgjs.com/svgjs"
      width="1280"
      height="1920"
      preserveAspectRatio="none"
      viewBox="0 0 1280 1920"
    >
      <g mask='url("#SvgjsMask1008")' fill="none">
        <rect
          width="1280"
          height="1920"
          x="0"
          y="0"
          fill="rgba(241, 241, 241, 1)"
        ></rect>
        <path
          d="M0,488.042C107.279,499.4,227.391,553.332,317.039,493.322C406.801,433.235,395.551,299.096,433.399,197.927C468.054,105.293,525.797,22.592,530.108,-76.218C534.995,-188.226,537.753,-317.881,459.403,-398.075C381.178,-478.141,246.533,-442.364,139.709,-475.806C30.174,-510.097,-62.479,-618.265,-175.222,-596.751C-288.342,-575.165,-356.387,-460.727,-424.792,-368.084C-488.819,-281.37,-558.704,-187.819,-556.739,-80.047C-554.85,23.564,-464.474,98.502,-414.628,189.354C-369.165,272.218,-353.334,375.222,-276.645,430.467C-198.64,486.66,-95.604,477.92,0,488.042"
          fill="#d9d9d9"
        ></path>
        <path
          d="M1280 2667.551C1418.132 2649.029 1528.077 2560.299 1656.1019999999999 2505.226 1814.859 2436.933 2024.501 2447.009 2122.923 2304.95 2221.811 2162.218 2170.34 1967.397 2148.0280000000002 1795.196 2125.434 1620.8229999999999 2104.772 1437.916 1992.993 1302.188 1880.046 1165.042 1708.555 1089.731 1535.157 1051.0149999999999 1368.895 1013.892 1196.394 1031.516 1035.842 1088.475 881.198 1143.338 754.63 1247.798 642.581 1367.673 526.891 1491.444 407.44399999999996 1623.424 379.60900000000004 1790.5430000000001 351.52700000000004 1959.146 408.226 2130.734 490.539 2280.535 569.034 2423.387 686.608 2543.852 832.9649999999999 2615.6 970.4490000000001 2682.999 1128.242 2687.9 1280 2667.551"
          fill="#ffffff"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1008">
          <rect width="1280" height="1920" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  );
};

const Sharp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      // xmlns:svgjs="http://svgjs.com/svgjs"
      width="1280"
      height="1280"
      preserveAspectRatio="none"
      viewBox="0 0 1280 1280"
      className="absolute inset-0 -z-10 h-full w-full"
    >
      <g mask='url("#SvgjsMask1859")' fill="none">
        <rect
          width="1280"
          height="1280"
          x="0"
          y="0"
          fill="url(#SvgjsLinearGradient1860)"
        ></rect>
        <path
          d="M1280 0L1164.38 0L1280 307.17z"
          fill="rgba(255, 255, 255, .1)"
        ></path>
        <path
          d="M1164.38 0L1280 307.17L1280 734.4300000000001L642.8300000000002 0z"
          fill="rgba(255, 255, 255, .075)"
        ></path>
        <path
          d="M642.83 0L1280 734.4300000000001L1280 767.9000000000001L562.3100000000001 0z"
          fill="rgba(255, 255, 255, .05)"
        ></path>
        <path
          d="M562.3100000000001 0L1280 767.9000000000001L1280 779.95L550.47 0z"
          fill="rgba(255, 255, 255, .025)"
        ></path>
        <path d="M0 1280L0.68 1280L0 1093.62z" fill="rgba(0, 0, 0, .1)"></path>
        <path
          d="M0 1093.62L0.68 1280L393.85 1280L0 768.6299999999999z"
          fill="rgba(0, 0, 0, .075)"
        ></path>
        <path
          d="M0 768.63L393.85 1280L762.99 1280L0 767.47z"
          fill="rgba(0, 0, 0, .05)"
        ></path>
        <path
          d="M0 767.47L762.99 1280L1122.73 1280L0 395.33000000000004z"
          fill="rgba(0, 0, 0, .025)"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1859">
          <rect width="1280" height="1280" fill="#ffffff"></rect>
        </mask>
        <linearGradient
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
          id="SvgjsLinearGradient1860"
        >
          <stop stopColor="rgba(255, 255, 255, 1)" offset="0"></stop>
          <stop stopColor="rgba(229, 231, 235, 1)" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

const Sprinkle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      // xmlnsXlink="http://www.w3.org/1999/xlink"
      // xmlns:svgjs="http://svgjs.dev/svgjs"
      width="1280"
      height="1280"
      preserveAspectRatio="none"
      viewBox="0 0 1280 1280"
      className="absolute inset-0 -z-10 h-full w-full"
    >
      <g mask='url("#SvgjsMask2020")' fill="none">
        <rect
          width="1280"
          height="1280"
          x="0"
          y="0"
          fill='url("#SvgjsRadialGradient2021")'
        ></rect>
        <use xlinkHref="#SvgjsSymbol2028" x="0" y="0"></use>
        <use xlinkHref="#SvgjsSymbol2028" x="0" y="720"></use>
        <use xlinkHref="#SvgjsSymbol2028" x="720" y="0"></use>
        <use xlinkHref="#SvgjsSymbol2028" x="720" y="720"></use>
      </g>
      <defs>
        <mask id="SvgjsMask2020">
          <rect width="1280" height="1280" fill="#ffffff"></rect>
        </mask>
        <radialGradient
          cx="0%"
          cy="100%"
          r="1810.19"
          gradientUnits="userSpaceOnUse"
          id="SvgjsRadialGradient2021"
        >
          <stop stop-color="rgba(225, 216, 179, 1)" offset="0"></stop>
          <stop stop-color="rgba(254, 243, 199, 1)" offset="1"></stop>
        </radialGradient>
        <path
          d="M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z"
          id="SvgjsPath2023"
        ></path>
        <path
          d="M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z"
          id="SvgjsPath2027"
        ></path>
        <path
          d="M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z"
          id="SvgjsPath2024"
        ></path>
        <path d="M2 -2 L-2 2z" id="SvgjsPath2025"></path>
        <path d="M6 -6 L-6 6z" id="SvgjsPath2022"></path>
        <path d="M30 -30 L-30 30z" id="SvgjsPath2026"></path>
      </defs>
      <symbol id="SvgjsSymbol2028">
        <use
          xlinkHref="#SvgjsPath2022"
          x="30"
          y="30"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2023"
          x="30"
          y="90"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="30"
          y="150"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="30"
          y="210"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2023"
          x="30"
          y="270"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="30"
          y="330"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="30"
          y="390"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="30"
          y="450"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="30"
          y="510"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="30"
          y="570"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="30"
          y="630"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2023"
          x="30"
          y="690"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="90"
          y="30"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="90"
          y="90"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="90"
          y="150"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="90"
          y="210"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="90"
          y="270"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2026"
          x="90"
          y="330"
          stroke="rgba(255, 237, 237, 1)"
          strokeWidth="3"
        ></use>
        <use
          xlinkHref="#SvgjsPath2027"
          x="90"
          y="390"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="90"
          y="450"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="90"
          y="510"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="90"
          y="570"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="90"
          y="630"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="90"
          y="690"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="150"
          y="30"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="150"
          y="90"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="150"
          y="150"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="150"
          y="210"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2027"
          x="150"
          y="270"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="150"
          y="330"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="150"
          y="390"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="150"
          y="450"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="150"
          y="510"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2023"
          x="150"
          y="570"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="150"
          y="630"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="150"
          y="690"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2023"
          x="210"
          y="30"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="210"
          y="90"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="210"
          y="150"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="210"
          y="210"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="210"
          y="270"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="210"
          y="330"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="210"
          y="390"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="210"
          y="450"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="210"
          y="510"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="210"
          y="570"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="210"
          y="630"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2027"
          x="210"
          y="690"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="270"
          y="30"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="270"
          y="90"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2027"
          x="270"
          y="150"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="270"
          y="210"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="270"
          y="270"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="270"
          y="330"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2026"
          x="270"
          y="390"
          stroke="rgba(255, 237, 237, 1)"
          strokeWidth="3"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="270"
          y="450"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="270"
          y="510"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="270"
          y="570"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="270"
          y="630"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2027"
          x="270"
          y="690"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2026"
          x="330"
          y="30"
          stroke="rgba(255, 237, 237, 1)"
          strokeWidth="3"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="330"
          y="90"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="330"
          y="150"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="330"
          y="210"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="330"
          y="270"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="330"
          y="330"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="330"
          y="390"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="330"
          y="450"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="330"
          y="510"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="330"
          y="570"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="330"
          y="630"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="330"
          y="690"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="390"
          y="30"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2023"
          x="390"
          y="90"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="390"
          y="150"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2023"
          x="390"
          y="210"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="390"
          y="270"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="390"
          y="330"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="390"
          y="390"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="390"
          y="450"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="390"
          y="510"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="390"
          y="570"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="390"
          y="630"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="390"
          y="690"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="450"
          y="30"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="450"
          y="90"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="450"
          y="150"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="450"
          y="210"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="450"
          y="270"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="450"
          y="330"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2027"
          x="450"
          y="390"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="450"
          y="450"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2026"
          x="450"
          y="510"
          stroke="rgba(255, 250, 232, 1)"
          strokeWidth="3"
        ></use>
        <use
          xlinkHref="#SvgjsPath2023"
          x="450"
          y="570"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2026"
          x="450"
          y="630"
          stroke="rgba(255, 255, 255, 1)"
          strokeWidth="3"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="450"
          y="690"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="510"
          y="30"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="510"
          y="90"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="510"
          y="150"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="510"
          y="210"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="510"
          y="270"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="510"
          y="330"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="510"
          y="390"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2026"
          x="510"
          y="450"
          stroke="rgba(255, 237, 237, 1)"
          strokeWidth="3"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="510"
          y="510"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="510"
          y="570"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="510"
          y="630"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="510"
          y="690"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2023"
          x="570"
          y="30"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="570"
          y="90"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="570"
          y="150"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="570"
          y="210"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="570"
          y="270"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2027"
          x="570"
          y="330"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="570"
          y="390"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="570"
          y="450"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="570"
          y="510"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2027"
          x="570"
          y="570"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="570"
          y="630"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="570"
          y="690"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="630"
          y="30"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="630"
          y="90"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="630"
          y="150"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2027"
          x="630"
          y="210"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="630"
          y="270"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="630"
          y="330"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="630"
          y="390"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="630"
          y="450"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2026"
          x="630"
          y="510"
          stroke="rgba(255, 237, 237, 1)"
          strokeWidth="3"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="630"
          y="570"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="630"
          y="630"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="630"
          y="690"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2023"
          x="690"
          y="30"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="690"
          y="90"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="690"
          y="150"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="690"
          y="210"
          stroke="rgba(255, 237, 237, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="690"
          y="270"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2026"
          x="690"
          y="330"
          stroke="rgba(255, 250, 232, 1)"
          strokeWidth="3"
        ></use>
        <use
          xlinkHref="#SvgjsPath2026"
          x="690"
          y="390"
          stroke="rgba(255, 255, 255, 1)"
          strokeWidth="3"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="690"
          y="450"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2022"
          x="690"
          y="510"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="690"
          y="570"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2024"
          x="690"
          y="630"
          stroke="rgba(255, 250, 232, 1)"
        ></use>
        <use
          xlinkHref="#SvgjsPath2025"
          x="690"
          y="690"
          stroke="rgba(255, 255, 255, 1)"
        ></use>
      </symbol>
    </svg>
  );
};
