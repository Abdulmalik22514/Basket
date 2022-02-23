import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Arrow = () => {
  return (
    <Svg
      width="33"
      height="26"
      viewBox="0 0 33 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20 2L30.5 13.858M30.5 13.858L20 24.0219M30.5 13.858H2"
        stroke="#112D42"
        stroke-width="3"
        stroke-linecap="round"
      />
    </Svg>
  );
};
