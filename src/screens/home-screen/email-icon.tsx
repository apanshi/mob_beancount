import { G, Path, Svg } from "react-native-svg";
import * as React from "react";
import { useTheme } from "@/common/theme";

export function EmailIcon(): JSX.Element {
  const theme = useTheme().colorTheme;
  return (
    <Svg width="64px" height="64px" viewBox="0 0 64 64">
      <G
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinejoin="round"
      >
        <G
          id="SHUTTERSTOCK_572377249_Vector"
          transform="translate(-67.000000, -115.000000)"
          stroke={theme.black90}
          strokeWidth="2"
        >
          <Path
            d="M130,135 L130,174 C130,176.209 128.209,178 126,178 L72,178 C69.791,178 68,176.209 68,174 L68,135"
            id="Stroke-46"
          ></Path>
          <Path
            d="M74,131.149 L68.041,134.944 M109.519,122.002 L101.036,116.632 C99.714,115.809 98.177,115.77 96.8,116.632 L88.37,122 M129.959,134.944 L124.001,131.171 M129.959,148.04 L101.036,166.352 C99.714,167.174 98.177,167.215 96.8,166.352 L68.041,148.04 M74,146 L74,126 C74,123.791 75.791,122 78,122 L120,122 C122.209,122 124,123.791 124,126 L124,146 M101.537,156.425 C97.867,156.466 94.097,155.6 91.143,153.421 C85.925,149.57 85.013,141.889 87.954,136.326 C90.672,131.181 96.727,128.666 102.32,129.871 C107.746,131.041 111.78,135.727 111.898,141.021 C111.901,141.182 111.9,141.343 111.903,141.504 C112.099,152.989 103,148.924 103,145.956 L103,136 M102.028,136.758 C100.359,136.355 98.715,136.201 97.044,136.972 C93.946,138.401 92.718,142.245 93.563,145.245 C93.993,146.772 95.164,148.165 96.765,148.658 C99.973,149.645 101.8,147.883 102.719,145.686"
            id="Stroke-47"
            stroke-linecap="round"
          ></Path>
        </G>
      </G>
    </Svg>
  );
}
