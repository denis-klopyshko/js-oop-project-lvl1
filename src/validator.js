import StringSchema from './string.js';
import NumberSchema from './number.js';
import ArraySchema from './array.js';

export default class Validator {
  constructor() {
    this.schemas = {
      string: StringSchema,
      number: NumberSchema,
      array: ArraySchema,
    };
  }

  string() {
    return new this.schemas.string();
  }

  number() {
    return new this.schemas.number();
  }

  array() {
    return new this.schemas.array();
  }
}
