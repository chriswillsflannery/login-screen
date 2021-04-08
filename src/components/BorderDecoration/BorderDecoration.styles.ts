import styled from 'styled-components';
import { IBorderDecorationProps } from './BorderDecoration.types';

export const SC_BORDERDECORATION = styled.div<IBorderDecorationProps>`
  opacity: 0.5;
  width: ${props => props.size === 'sm' ? '50px' : '150px'};
  position: absolute;
  top: ${props => props.position === 'tr' && '-15px'};
  right: ${props => props.position === 'tr' && '-15px'};
  bottom: ${props => props.position === 'bl' && '-30px'};
  left: ${props => props.position === 'bl' && '-30px'};
`;