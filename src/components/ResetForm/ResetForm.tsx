import { useState, useRef } from 'react';
import { IResetFormProps } from './ResetForm.types';
import { SC_RESET_FORM } from './ResetForm.styles';
import {
  SC_H1,
  SC_H5,
  SC_FORM,
  SC_FORM_INPUT,
  SC_FORM_SUBMIT,
  SC_BUTTON_LINK,
  colors,
} from '../../utils/style-utils/vars';
import Blimp from '../SVG/Blimp';
import { validateFormInput } from '../../utils/auth-utils/formInputValidation';

const ResetForm: React.FC<IResetFormProps> = ({ setShowResetForm, setShowToast }) => {
  const [input, setInput] = useState<string>('');
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFormInput(input)) {
      setShowResetForm(false);
      setShowToast(true);
    } else {
      if (inputEl.current) {
        inputEl.current.value = "please enter a valid email address.";
        inputEl.current.style.color = "red";
      }
    }
  }

  return (
    <SC_RESET_FORM data-testid="ResetForm">
      <SC_H1 color={colors.defaultText} margin="0 0 30px 0">
        Reset Password
      </SC_H1>
      <Blimp width="40px"/>
      <SC_FORM margin="30px 0 0 0" onSubmit={handleSubmit}>
        <SC_FORM_INPUT
          type="text"
          ref={inputEl}
          value={input}
          placeholder="Email"
          onChange={(e) => setInput(e.target.value)}
          data-testid="ResetForm--input"
        />
        <SC_FORM_SUBMIT type="submit" value="Reset Password" data-testid="ResetForm--submit"/>
      </SC_FORM>
      <SC_H5>
        Didn't mean to click that?
        <SC_BUTTON_LINK onClick={() => setShowResetForm(false)}>
          Sign in.
        </SC_BUTTON_LINK>
      </SC_H5>
    </SC_RESET_FORM>
  );
}

export default ResetForm;