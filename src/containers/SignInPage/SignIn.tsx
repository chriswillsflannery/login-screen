import { SC_SIGNIN } from './SignIn.styles';
import SideBar from '../SideBar';
import MainContent from '../MainContent';

const SignInPage = () => (
  <SC_SIGNIN className="SignIn">
    <SideBar />
    <MainContent />
  </SC_SIGNIN>
);

export default SignInPage;