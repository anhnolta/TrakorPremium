import { memo, SVGProps } from 'react';

const Ellipse10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8} cy={8} r={8} fill='url(#paint0_linear_26_1981)' />
    <defs>
      <linearGradient id='paint0_linear_26_1981' x1={0} y1={8} x2={16} y2={8} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#EBE49D' />
        <stop offset={1} stopColor='#7F5127' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse10Icon);
export { Memo as Ellipse10Icon };
