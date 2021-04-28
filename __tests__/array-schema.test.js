import Validator from '../src/validator';

describe('number', () => {
  let validator;
  let schema;

  beforeEach(() => {
    validator = new Validator();
    schema = validator.array();
  });

  it('required', () => {
    schema.required();

    expect(schema.isValid([])).toBeTruthy();
    expect(schema.isValid(['hexlet'])).toBeTruthy();
    expect(schema.isValid(1)).toBeFalsy();
  });

  it('sizeof', () => {
    schema.sizeof(2);

    expect(schema.isValid(['hexlet'])).toBeFalsy();
    expect(schema.isValid(['hexlet', 'code-basics'])).toBeTruthy();
  });
});
