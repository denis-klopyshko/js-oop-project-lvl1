import BaseSchema from './schema.js';

export default class ArraySchema extends BaseSchema {
  required() {
    this.checks.push({
      validate: this.constructor.validators.required,
      args: [],
    });
    return this;
  }

  sizeof(size) {
    this.checks.push({
      validate: this.constructor.validators.sizeof,
      args: [size],
    });
    return this;
  }
}

ArraySchema.validators = {
  required: (val) => Array.isArray(val),
  sizeof: (val, size) => val.length === size,
};
