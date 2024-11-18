import { memo, SVGProps } from 'react';

const Ellipse8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={18} cy={18} r={18} fill='black' />
  </svg>
);

const Memo = memo(Ellipse8Icon);
export { Memo as Ellipse8Icon };
