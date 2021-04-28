import _ from 'lodash';
import BaseSchema from './schema.js';

export default class StringSchema extends BaseSchema {
  required() {
    this.checks.push({
      validate: this.constructor.validators.required,
      args: [],
    });
    return this;
  }

  minLength(len) {
    this.checks.push({
      validate: this.constructor.validators.minLength,
      args: [len],
    });
    return this;
  }

  contains(substr) {
    this.checks.push({
      validate: this.constructor.validators.contains,
      args: [substr],
    });
    return this;
  }
}

StringSchema.validators = {
  required: (val) => typeof val === 'string' && val.length > 0,
  minLength: (val, len) => val.length >= len,
  contains: (val, substr) => _.includes(val, substr),
};
