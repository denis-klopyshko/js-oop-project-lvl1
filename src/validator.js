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
    const StringSchemaName = this.schemas.string;
    return new StringSchemaName();
  }

  number() {
    const NumberSchemaName = this.schemas.number;
    return new NumberSchemaName();
  }

  array() {
    const ArraySchemaName = this.schemas.array;
    return new ArraySchemaName();
  }

  object() {
    const ObjectSchemaName = this.schemas.object;
    return new ObjectSchemaName();
  }

  addValidator(type, name, fn) {
    if (!this.schemas[type]) {
      throw new Error('Unknown validator type!');
    }

    this.schemas[type].validators[name] = fn;
  }
}
