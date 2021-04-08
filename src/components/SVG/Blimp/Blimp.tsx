import { colors } from '../../../utils/style-utils/vars';
import { IBlimpProps } from  './Blimp.types';

const Blimp: React.FC<IBlimpProps> = ({ width }) => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 42.72 4.38"
    width={width}
  >
  <path fill={colors.inputBackground} d="M42.72,2.19L42.72,2.19c0,1.21-0.98,2.19-2.19,2.19H2.19C0.98,4.38,0,3.4,0,2.19v0C0,0.98,0.98,0,2.19,0h38.33
    C41.74,0,42.72,0.98,42.72,2.19z"/>
  </svg>
);

export default Blimp;