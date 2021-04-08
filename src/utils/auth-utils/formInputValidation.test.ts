import { validateFormInput } from './formInputValidation';

describe('validate form input', () => {
  describe('with valid form input', () => {
    const input = "chris@acme.com"
    test('function returns true', () => {
      expect(validateFormInput(input)).toBe(true);
    });
  });
  describe('with invalid form input', () => {
    const input = 'iloverollerblading';
    test('function returns false', () => {
      expect(validateFormInput(input)).toBe(false);
    });
  });
});
