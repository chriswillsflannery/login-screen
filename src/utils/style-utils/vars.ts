import styled from 'styled-components';
import { ITextProps, IFormProps, IFormInputProps } from './vars.types';

export const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  phone: `(max-width: ${breakpoints.tablet})`,
};

export const colors = {
  primary: '#F857A6',
  gradient: 'linear-gradient(180deg, rgba(248,87,166,1) 0%, rgba(255,88,88,1) 100%)',
  defaultText: '#403e45',
  primaryText: '#ffffff',
  inputBorder: '#c9c0c0',
  inputBackground: '#f7f4f5',
};

export const font = 'Montserrat';

export const SC_H1 = styled.h1<ITextProps>`
  font-family: 'Montserrat', serif;
  font-size: '48px';
  font-weight: 900;
  line-height: '56px';
  margin: ${props => props.margin};
  color: ${props => props.color};
`;

export const SC_H3 = styled.h3<ITextProps>`
  font-family: 'Montserrat', serif;
  font-size: '36px';
  font-weight: 900;
  line-height: '44px';
  margin: ${props => props.margin};
  color: ${props => props.color};
`;
export const SC_H5 = styled.h5<ITextProps>`
  font-family: 'Montserrat', serif;
  font-size: '20px';
  font-weight: 500;
  line-height: '30px';
  margin: ${props => props.margin};
`;

export const SC_P = styled.p`
  font-family: 'Montserrat', serif;
  font-size: '18px';
  font-weight: 500;
  line-height: '24px';
`;

export const SC_SMALL = styled.small<ITextProps>`
  font-family: 'Montserrat', serif;
  font-size: '14px';
  font-weight: 500;
  line-height: '20px';
  color: ${props => props.color};
`;

export const SC_FORM = styled.form<IFormProps>`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: ${props => props.margin};
`;

export const SC_FORM_INPUT = styled.input<IFormInputProps>`
  font-family: ${font};
  height: 40px;
  background: ${colors.inputBackground};
  border: 1px solid ${colors.inputBorder};
  border-radius: 5px;
  margin: 0 0 20px 0;
  padding: 0 10px;
  :focus {
    outline: 1px solid ${colors.primary};
  }
`;

export const SC_FORM_SUBMIT = styled.input`
  height: 40px;
  background: ${colors.gradient};
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  color: ${colors.primaryText};
  font-family: ${font};
  font-weight: 900;
  text-transform: uppercase;
`;

export const SC_BUTTON_LINK = styled.button`
  font-family: ${font}, serif;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.primary};
`;

export const SC_FOOTER = styled.footer`
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
`;