import { useState } from 'react';
import { SC_MAIN_CONTENT } from './MainContent.styles';
import SignInForm from '../../components/SignInForm';
import ResetForm from '../../components/ResetForm';
import Toast from '../../components/Toast';
import { colors, SC_SMALL, SC_FOOTER } from '../../utils/style-utils/vars';

const MainContent = () => {
  const [showResetForm, setShowResetForm] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <SC_MAIN_CONTENT>
      <Toast showToast={showToast} setShowToast={setShowToast} />
      {
        showResetForm
        ? (
          <ResetForm
            setShowResetForm={setShowResetForm}
            setShowToast={setShowToast}
          />
        ) : (
          <SignInForm
            setShowResetForm={setShowResetForm}
            setShowToast={setShowToast}
          />
        )
      }
      <SC_FOOTER>
        <SC_SMALL color={colors.inputBorder}>&copy; Copyright ACME 2020</SC_SMALL>
      </SC_FOOTER>
    </SC_MAIN_CONTENT>
  );
};

export default MainContent;