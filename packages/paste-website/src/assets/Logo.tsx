import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

export interface ComponentsIconProps {
  size?: number;
  title?: string;
  decorative?: boolean;
}

const Logo = React.memo(({title = 'Paste Logo', decorative = true, size}: ComponentsIconProps) => {
  const titleId = useUID();
  return (
    <span style={{width: size, height: size, display: 'inline-block'}}>
      <svg role="img" aria-hidden={decorative} aria-labelledby={titleId} viewBox="0 0 785.65 785.65">
        {title ? <title id={titleId}>{title}</title> : null}
        <rect fill="#f22f46" height="785.65" rx="60" width="785.65" />
        <g fill="#fff" stroke="#fff" strokeMiterlimit="10" strokeWidth="25">
          <path d="m530.84 447.84h-276.84a62.82 62.82 0 0 1 -62.75-62.75v-.09l1.82-199.25a62.81 62.81 0 0 1 62.75-62.68h276.85a62.81 62.81 0 0 1 62.74 62.74v.11l-1.82 199.24a62.82 62.82 0 0 1 -62.75 62.68zm-316.37-62.7a39.55 39.55 0 0 0 39.53 39.45h276.84a39.55 39.55 0 0 0 39.5-39.5v-.09l1.83-199.24a39.55 39.55 0 0 0 -39.5-39.45h-276.87a39.55 39.55 0 0 0 -39.5 39.5v.11z" />
          <path d="m242.63 662.59a52.5 52.5 0 0 1 -52.4-52.46v-122.13a63.16 63.16 0 0 1 63.09-63.09h104l117.86-264.23a63.09 63.09 0 0 1 120.19 26.84v197.55a63.16 63.16 0 0 1 -63.09 63.09h-159.93l-82.24 184.28a52.61 52.61 0 0 1 -47.48 30.15zm10.69-214.43a39.9 39.9 0 0 0 -39.85 39.84v122.13a29.19 29.19 0 0 0 55.53 12.51l77.86-174.48zm129.4-23.24h149.56a39.9 39.9 0 0 0 39.85-39.85v-197.55a39.85 39.85 0 0 0 -75.87-17.05z" />
        </g>
      </svg>
    </span>
  );
});

export {Logo};
