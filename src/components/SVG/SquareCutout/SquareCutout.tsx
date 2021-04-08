import { ISquareCutoutProps } from './SquareCutout.types';

const SquareCutout: React.FC<ISquareCutoutProps> = ({ width }) => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 767 767"
    width={width}
  >
    <g fill="#ffffff">
      <path d="M1,766V1h765v765H1z M88,679h591V88H88V679z"/>
      <path d="M765.5,1.5v764H1.5V1.5H765.5 M87.5,679.5h1h590h1v-1v-590v-1h-1h-590h-1v1v590V679.5 M766.5,0.5H0.5v766h766
        V0.5L766.5,0.5z M88.5,678.5v-590h590v590H88.5L88.5,678.5z"/>
    </g>
  </svg>
);

export default SquareCutout;