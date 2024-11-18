import { memo, SVGProps } from 'react';

const GroupIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 144 137' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M143.624 10.7243L117.422 118.715C116.189 123.802 110.487 126.422 105.812 124.007L72.6744 106.899L57.0049 132.535C52.7408 139.522 41.952 136.491 41.952 128.323V99.7579C41.952 97.5488 42.8767 95.4424 44.4693 93.9011L109.048 32.2506C108.997 31.48 108.175 30.8121 107.353 31.3773L30.2897 85.0132L4.39653 71.6556C-1.66577 68.5217 -1.40889 59.7365 4.85891 57.0136L132.527 1.37402C138.64 -1.2975 145.217 4.19967 143.624 10.7243Z'
      fill='url(#paint0_linear_26_1998)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_26_1998'
        x1={0}
        y1={68.5564}
        x2={143.865}
        y2={68.5564}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#EBE49D' />
        <stop offset={1} stopColor='#7F5127' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(GroupIcon4);
export { Memo as GroupIcon4 };
