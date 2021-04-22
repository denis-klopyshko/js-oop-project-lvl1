import Validator from '../src/validator';

describe('validator', function (){

  it('string validator', function() {
    const v = new Validator();

    const schema = v.string();

    expect(schema.isValid('')).toBeTruthy();

    schema.required();

    expect(schema.isValid('some string')).toBeTruthy();
    expect(schema.isValid('hexlet')).toBeTruthy();
    expect(schema.isValid(null)).toBeFalsy();
    expect(schema.isValid('')).toBeFalsy();

    expect(schema.contains('some').isValid('some string')).toBeTruthy();
    expect(schema.contains('number').isValid('some string')).toBeFalsy();
  })
})
