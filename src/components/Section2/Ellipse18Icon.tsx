import { memo, SVGProps } from 'react';

const Ellipse18Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1847 1847' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle
      opacity={0.2}
      cx={923.5}
      cy={923.5}
      r={923.5}
      transform='matrix(-1 0 0 1 1847 0)'
      fill='url(#paint0_radial_26_1973)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_26_1973'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(923.5 923.5) rotate(90) scale(923.5)'
      >
        <stop stopColor='#CAB879' />
        <stop offset={1} />
      </radialGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse18Icon);
export { Memo as Ellipse18Icon };
