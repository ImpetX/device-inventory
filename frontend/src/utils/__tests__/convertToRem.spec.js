import { convertToRem } from '..';
import { convertToRemErrorMessage } from '../convertToRem';

describe('Convert to Rem', () => {
  it('should return a message when the input is not a number', () => {
    expect(convertToRem('16px')).toBe(convertToRemErrorMessage);
  });

  it('should return 1rem when the input is 16', () => {
    expect(convertToRem(16)).toBe('1rem');
  });
});
