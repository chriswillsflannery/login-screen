import styled from 'styled-components';
import { ISideBarProps, ISideBarContentProps } from './SideBar.types';
import { colors, device } from '../../utils/style-utils/vars';


export const SC_SIDEBAR = styled.div<ISideBarProps>`
  background: ${colors.gradient};
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media ${device.phone} {
    display: none;
  }
`;

export const SC_SIDEBAR_CONTENT = styled.div<ISideBarContentProps>`
  width: 80%;
  color: white;
`;