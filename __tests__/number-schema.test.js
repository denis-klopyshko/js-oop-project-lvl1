import Validator from '../src/validator';

describe('number', () => {
  let validator;
  let schema;

  beforeEach(() => {
    validator = new Validator();
    schema = validator.number();
  });

  it('positive', () => {
    schema.positive();

    expect(schema.isValid(1)).toBeTruthy();
    expect(schema.isValid(0)).toBeFalsy();
    expect(schema.isValid(-1)).toBeFalsy();
    expect(schema.isValid(Infinity)).toBeTruthy();
    expect(schema.isValid(-Infinity)).toBeFalsy();
  });

  it('required', () => {
    schema.required();

    expect(schema.isValid(1)).toBeTruthy();
    expect(schema.isValid(-1)).toBeTruthy();
    expect(schema.isValid(0)).toBeTruthy();
    expect(schema.isValid()).toBeFalsy();
    expect(schema.isValid('1')).toBeFalsy();

    expect(schema.isValid(Infinity)).toBeFalsy();
    expect(schema.isValid(-Infinity)).toBeFalsy();
    expect(schema.isValid(NaN)).toBeFalsy();
  });

  it('range', () => {
    expect(schema.range(1, 5).isValid(4)).toBeTruthy();
    expect(schema.range(3, 8).isValid(2)).toBeFalsy();
  });

  it('e2e', () => {
    schema.required().positive();

    expect(schema.range(1, 5).isValid(4)).toBeTruthy();
    expect(schema.range(3, 8).isValid(2)).toBeFalsy();
    expect(schema.range(0, 1).isValid(-2)).toBeFalsy();
  });
});
