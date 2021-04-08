export const validateFormInput = (input: string): boolean => {
  if (!input.includes('@')) return false;
  const email: string[] = input.split('@');
  if (email.length !== 2) return false;
  
  // const user = email[0];
  // const domain = email[1];
  // here we would do further checks,
  // scrub for special characters to avoid XSS attack
  // or SQL injection, etc.

  return true;
};