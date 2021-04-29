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
    const SchemaName = this.schemas.string;
    return new SchemaName();
  }

  number() {
    const SchemaName = this.schemas.number;
    return new SchemaName();
  }

  array() {
    const SchemaName = this.schemas.array;
    return new SchemaName();
  }

  object() {
    const SchemaName = this.schemas.array;
    return new SchemaName();
  }

  addValidator(type, name, fn) {
    if (!this.schemas[type]) {
      throw new Error('Unknown validator type!');
    }

    this.schemas[type].validators[name] = fn;
  }
}
