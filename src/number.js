import _ from 'lodash';
import BaseSchema from './schema.js';

export default class NumberSchema extends BaseSchema {
  required() {
    this.requiredValue = true;
    this.checks.push({
      validate: this.constructor.validators.required,
      args: [],
    });
    return this;
  }

  positive() {
    this.checks.push({
      validate: this.constructor.validators.positive,
      args: [],
    });
    return this;
  }

  range(start, end) {
    this.checks.push({
      validate: this.constructor.validators.range,
      args: [start, end],
    });
    return this;
  }
}

NumberSchema.validators = {
  required: (val) => _.isFinite(val),
  positive: (val) => parseFloat(val) > 0,
  range: (val, start, end) => _.inRange(val, start, end),
};
