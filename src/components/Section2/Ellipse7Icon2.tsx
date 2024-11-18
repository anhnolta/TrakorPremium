import { memo, SVGProps } from 'react';

const Ellipse7Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={18} cy={18} r={18} fill='black' />
  </svg>
);

const Memo = memo(Ellipse7Icon2);
export { Memo as Ellipse7Icon2 };
