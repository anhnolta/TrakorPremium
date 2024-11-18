import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M25.2018 0H30.1084L19.3887 12.2843L32 29H22.1251L14.3913 18.8618L5.54181 29H0.631813L12.0977 15.8608L0 0H10.1249L17.1159 9.26649L25.2018 0ZM23.4796 26.0553H26.1986L8.64769 2.79016H5.73019L23.4796 26.0553Z'
      fill='url(#paint0_linear_26_2001)'
    />
    <defs>
      <linearGradient id='paint0_linear_26_2001' x1={0} y1={14.5} x2={32} y2={14.5} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#EBE49D' />
        <stop offset={1} stopColor='#7F5127' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
