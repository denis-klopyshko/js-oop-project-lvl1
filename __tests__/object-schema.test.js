import Validator from '../src/validator';

describe('object', () => {
  let validator;
  let schema;

  beforeEach(() => {
    validator = new Validator();
    schema = validator.object();
  });

  it('null', () => {
    expect(schema.isValid(null)).toBeTruthy();
  });

  it('e2e', () => {
    schema.shape({
      name: validator.string().required(),
      age: validator.number().positive(),
    });

    expect(schema.isValid({ name: 'kolya', age: 100 })).toBeTruthy();
    expect(schema.isValid({ name: 'maya', age: null })).toBeTruthy();
    expect(schema.isValid({ name: '', age: null })).toBeFalsy();
    expect(schema.isValid({ name: 'ada', age: -5 })).toBeFalsy();
  });
});
