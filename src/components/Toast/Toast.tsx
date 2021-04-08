
import { SC_TOAST, SC_ICON_CONTAINER, SC_TEXT_CONTAINER } from './Toast.styles';
import { IToastProps } from './Toast.types';
import ThumbsUp from '../SVG/ThumbsUp';
import { SC_SMALL } from '../../utils/style-utils/vars';

const Toast: React.FC<IToastProps> = ({ showToast, setShowToast }) => (
  <SC_TOAST showToast={showToast} onClick={() => setShowToast(false)}>
    <SC_ICON_CONTAINER>
      <ThumbsUp width="20px" />
    </SC_ICON_CONTAINER>
    <SC_TEXT_CONTAINER>
      <SC_SMALL>
        Password reset instructions have been sent.
      </SC_SMALL>
    </SC_TEXT_CONTAINER>
  </SC_TOAST>
);

export default Toast;