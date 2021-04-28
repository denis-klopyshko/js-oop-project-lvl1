import StringSchema from './string.js';
import NumberSchema from './number.js';
import ArraySchema from './array.js';
import ObjectSchema from './object.js';

export default class Validator {
  constructor() {
    this.schemas = {
      string: StringSchema,
      number: NumberSchema,
      array: ArraySchema,
      object: ObjectSchema,
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

  object() {
    return new this.schemas.object();
  }

  addValidator(type, name, fn) {
    if (!this.schemas[type]) {
      throw new Error('Unknown validator type!');
    }

    this.schemas[type].validators[name] = fn;
  }
}
