import * as React from "react";
import svgProps from "./svg.types";

function LinkedInSvg(props: svgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 24 24" {...props}>
      <path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3m-4.504 5.403c.842 0 1.403.561 1.403 1.309s-.561 1.309-1.496 1.309C9.561 11.022 9 10.46 9 9.712s.561-1.309 1.496-1.309M12 20H9v-8h3zm10 0h-2.824v-4.372c0-1.209-.753-1.488-1.035-1.488s-1.224.186-1.224 1.488V20H14v-8h2.918v1.116c.376-.651 1.129-1.116 2.541-1.116S22 13.116 22 15.628z" />
    </svg>
  );
}

export default LinkedInSvg;
