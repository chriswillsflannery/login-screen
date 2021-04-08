import { SC_SIDEBAR, SC_SIDEBAR_CONTENT } from './SideBar.styles';
import { SC_H1, SC_H5 } from '../../utils/style-utils/vars';
import BorderDecoration from '../../components/BorderDecoration';
import SquareCutout from '../../components/SVG/SquareCutout';
import Logo from '../../components/Logo';

const SideBar = () => (
  <SC_SIDEBAR className="SideBar">
    <BorderDecoration
      position="tr"
      size="sm"
    >
      <SquareCutout />
    </BorderDecoration>
    <SC_SIDEBAR_CONTENT className="SideBar--content">
      <Logo />
      <SC_H1 margin="50px 0 0 0">
        Sign in and start saving your time today.
      </SC_H1>
      <SC_H5 margin="30px 0 0 0">
        We provide 24/7 support with our highly dedicated professional team.
      </SC_H5>
    </SC_SIDEBAR_CONTENT>
    <BorderDecoration
      position="bl"
      size="lg"
    >
      <SquareCutout />
    </BorderDecoration>
  </SC_SIDEBAR>
);

export default SideBar;