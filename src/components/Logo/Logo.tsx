import { SC_LOGO } from './Logo.styles';
import { SC_H3 } from '../../utils/style-utils/vars';
import SquareCutout from '../SVG/SquareCutout';

const Logo = () => (
  <SC_LOGO className="Logo" data-testid="Logo">
    <SquareCutout width="20px" />
    <SC_H3 className="Logo--text" margin="0 0 0 10px">
      ACME
    </SC_H3>
  </SC_LOGO>
);

export default Logo;