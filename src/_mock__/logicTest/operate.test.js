/* eslint-disable import/extensions */
import '@testing-library/jest-dom';
import operate from '../../logic/operate';

describe('operate', () => {
  it('should add/subtract/multiply/divide numbers', () => {
    expect(operate('4', '10', '+')).toBe('14');
    expect(operate('6', '4', '-')).toBe('2');
    expect(operate('4', '6', 'x')).toBe('24');
    expect(operate('6', '4', '/')).toBe('1.5');
    expect(operate('4', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });
});
