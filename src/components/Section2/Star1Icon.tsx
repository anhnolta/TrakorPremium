import { memo, SVGProps } from 'react';

const Star1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z'
      fill='url(#paint0_linear_26_1976)'
    />
    <defs>
      <linearGradient id='paint0_linear_26_1976' x1={0} y1={9} x2={18} y2={9} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#EBE49D' />
        <stop offset={1} stopColor='#7F5127' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Star1Icon);
export { Memo as Star1Icon };
