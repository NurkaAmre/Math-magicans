import calculate from '../../logic/calculate'

describe('calculate', () => {
  test('4+6=10', () =>{
    // arrangeconst total = 4;
    const next = 6;
    const operation = '+'
    //act
    const result = calculate({
    total, next, operation
  }, '=');

    //assert
    expect(result.total).toBe('10')
  })
  test('AC should clear all operations', () => {
    /* Arrange */
    const total = 4;
    const next = 6;
    const operation = null;
    /* Act */
    const result = calculate({
      total,
      next,
      operation,
  }, '=');
    /* Assert */
    expect(result.total).toBe(undefined);
  });
  test('Dot must added between numbers 4.6', () => {
    /* Arrange */
    const total = '4';
    const next = '6';
    const operation = null;
    /* Act */
    const result = calculate({
      total,
      next,
      operation,
  }, '.');
    /* Assert */
    expect(result.total).not.toEqual('4.6');
  });
  test(' +/- 4 should be -4', () => {
    /* Arrange */
    const total = -'4';
    const next = null;
    const operation = null;
    /* Act */
    const result = calculate({
      total,
      next,
      operation,
  }, '+/-');
    /* Assert */
    expect(result.total).toBe('4');
  });
});