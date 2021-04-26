import Validator from '../src/validator';

describe('string', () => {
  let validator;
  let schema;

  beforeEach(() => {
    validator = new Validator();
    schema = validator.string();
  });

  it('minLength', () => {
    expect(schema.minLength(3).isValid('te')).toBeFalsy();
    expect(schema.minLength(4).isValid('test')).toBeTruthy();
    expect(schema.minLength(5).isValid('test')).toBeFalsy();
    expect(schema.minLength(0).isValid('')).toBeTruthy();
  });

  it('required', () => {
    schema.required();

    expect(schema.isValid('hexlet')).toBeTruthy();
    expect(schema.isValid(null)).toBeFalsy();
    expect(schema.isValid()).toBeFalsy();
    expect(schema.isValid('')).toBeFalsy();
  });

  it('contains', () => {
    expect(schema.contains('some').isValid('some string')).toBeTruthy();
    expect(schema.contains('number').isValid('some string')).toBeFalsy();
  });
});
