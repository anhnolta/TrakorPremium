import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.9726 1.25646L14.6938 14.7701C14.5395 15.4065 13.8259 15.7344 13.2409 15.4322L9.09421 13.2914L7.13339 16.4994C6.59979 17.3738 5.24971 16.9945 5.24971 15.9723V12.3978C5.24971 12.1213 5.36543 11.8578 5.56473 11.6649L13.6459 3.95018C13.6395 3.85375 13.5366 3.77017 13.4337 3.84089L3.79034 10.5527L0.550165 8.88117C-0.208448 8.48901 -0.176303 7.38966 0.608026 7.04893L16.5839 0.0863976C17.349 -0.247907 18.1719 0.439988 17.9726 1.25646Z'
      fill='white'
      stroke='#CAB879'
    />
  </svg>
);

const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
