import { SC_SIGN_IN_FORM } from './SignInForm.styles';
import { ISignInFormProps } from './SignInForm.types';
import {
  SC_H1,
  SC_H5,
  SC_FORM,
  SC_BUTTON_LINK,
  SC_FORM_INPUT,
  SC_FORM_SUBMIT,
  colors
} from '../../utils/style-utils/vars';
import Blimp from '../SVG/Blimp';

const SignInForm: React.FC<ISignInFormProps> = ({ setShowResetForm, setShowToast }) => (
  <SC_SIGN_IN_FORM>
    <SC_H1 color={colors.defaultText} margin="0 0 30px 0">
      Sign In
    </SC_H1>
    <Blimp width="40px"/>
    <SC_FORM margin="30px 0 0 0" onSubmit={e => e.preventDefault()}>
      <SC_FORM_INPUT type="text" placeholder="Email" onChange={() => {}}/>
      <SC_FORM_INPUT type="text" placeholder="Password" onChange={() => {}}/>
      <SC_FORM_SUBMIT type="submit" value="Sign In"/>
    </SC_FORM>
    <SC_H5>
      Forgot your password?
      <SC_BUTTON_LINK onClick={() => setShowResetForm(true)}>
        Reset it here.
      </SC_BUTTON_LINK>
    </SC_H5>
  </SC_SIGN_IN_FORM>
);

export default SignInForm;