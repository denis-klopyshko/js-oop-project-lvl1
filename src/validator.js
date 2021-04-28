import StringSchema from './string.js';
import NumberSchema from './number.js';
import ArraySchema from './array.js';
import ObjectSchema from './object.js';

export default class Validator {
  constructor() {
    this.schemas = {
      String: StringSchema,
      Number: NumberSchema,
      Array: ArraySchema,
      Object: ObjectSchema,
    };
  }

  string() {
    return new this.schemas.String();
  }

  number() {
    return new this.schemas.Number();
  }

  array() {
    return new this.schemas.Array();
  }

  object() {
    return new this.schemas.Object();
  }
}
