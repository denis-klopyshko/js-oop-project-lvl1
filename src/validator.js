import StringSchema from './string.js';
import NumberSchema from './number.js';

export default class Validator {
  constructor() {
    this.schemas = {
      str: StringSchema,
      num: NumberSchema,
    };
  }

  string() {
    return new this.schemas.str();
  }

  number() {
    return new this.schemas.num();
  }
}
