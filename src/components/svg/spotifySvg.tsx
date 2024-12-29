import * as React from "react";
import svgProps from "./svg.types";

const SpotifySvg = (props: svgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    baseProfile="basic"
    viewBox="0 0 48 48"
    {...props}
  >
    <circle cx={24} cy={24} r={20} fill="#6be3a2" {...props} />
    <path
      {...props}
      fill="#324561"
      d="M35.643 21.502a1 1 0 0 1-.461-.113c-6.745-3.517-14.513-4.338-21.873-2.308a.999.999 0 1 1-.531-1.927c7.847-2.164 16.134-1.29 23.328 2.462a1 1 0 0 1-.463 1.886m-2.588 5.77a1 1 0 0 1-.455-.11 24.77 24.77 0 0 0-17.603-1.901.999.999 0 1 1-.508-1.934 26.76 26.76 0 0 1 19.022 2.056 1 1 0 0 1-.456 1.889m-2.701 5.666a1 1 0 0 1-.439-.103 19.6 19.6 0 0 0-13.13-1.462 1 1 0 0 1-.463-1.946 21.6 21.6 0 0 1 14.474 1.613 1 1 0 0 1-.442 1.898"
    />
  </svg>
);
export default SpotifySvg;
