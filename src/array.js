import BaseSchema from './schema.js';

export default class ArraySchema extends BaseSchema {
  constructor() {
    super();
    this.validators = {
      required: (val) => Array.isArray(val),
      sizeof: (val, size) => val.length === size,
    };
    this.checks = [];
  }

  required() {
    this.checks.push({
      validate: this.validators.required,
      args: [],
    });
    return this;
  }

  sizeof(size) {
    this.checks.push({
      validate: this.validators.sizeof,
      args: [size],
    });
    return this;
  }
}
