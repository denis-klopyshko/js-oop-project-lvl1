import _ from 'lodash';
import BaseSchema from './schema.js';

export default class NumberSchema extends BaseSchema {
  constructor() {
    super();
    this.validators = {
      required: (val) => _.isFinite(val),
      positive: (val) => val > 0,
      range: (val, start, end) => _.inRange(val, start, end),
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

  positive() {
    this.checks.push({
      validate: this.validators.positive,
      args: [],
    });
    return this;
  }

  range(start, end) {
    this.checks.push({
      validate: this.validators.range,
      args: [start, end],
    });
    return this;
  }
}
