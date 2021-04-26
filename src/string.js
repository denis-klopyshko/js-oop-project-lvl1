import _ from 'lodash';
import BaseSchema from './schema.js';

export default class StringSchema extends BaseSchema {
  constructor() {
    super();
    this.validators = {
      required: (val) => typeof val === 'string' && val.length > 0,
      minLength: (val, len) => val.length >= len,
      contains: (val, substr) => _.includes(val, substr),
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

  minLength(len) {
    this.checks.push({
      validate: this.validators.minLength,
      args: [len],
    });
    return this;
  }

  contains(substr) {
    this.checks.push({
      validate: this.validators.contains,
      args: [substr],
    });
    return this;
  }
}
