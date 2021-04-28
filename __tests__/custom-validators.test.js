import Validator from '../src/validator';

describe('custom validators', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  it('custom string validator', () => {
    // given
    const fn = (value, start) => value.startsWith(start);
    validator.addValidator('string', 'startWith', fn);

    // when
    const schema = validator.string().test('startWith', 'H');

    // then
    expect(schema.isValid('exlet')).toBeFalsy();
    expect(schema.isValid('Hexlet')).toBeTruthy();
  });

  it('custom number validator', () => {
    // given
    const fn = (value, min) => value >= min;
    validator.addValidator('number', 'min', fn);

    // when
    const schema = validator.number().test('min', 5);

    // then
    expect(schema.isValid(4)).toBeFalsy();
    expect(schema.isValid(6)).toBeTruthy();
  });
});
