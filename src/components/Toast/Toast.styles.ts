import styled from 'styled-components';
import { ISCToastProps } from './Toast.types';
import { colors, device } from '../../utils/style-utils/vars';

export const SC_TOAST = styled.div<ISCToastProps>`
  width: 400px;
  height: 50px;
  background: white;
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
  z-index: 999;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  animation: 0.5s ease-in 0s 1 dropIn;
  @keyframes dropIn {
    0% {
      transform: translateY(-20%);
    }
    100% {
      transform: translateY(0);
    }
  }
  display: ${props => props.showToast ? 'flex' : 'none'};
  @media ${device.phone} {
    width: 300px;
  }
`;

export const SC_ICON_CONTAINER = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.gradient};
`;

export const SC_TEXT_CONTAINER = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.phone} {
    padding: 0 20px;
  }
`;