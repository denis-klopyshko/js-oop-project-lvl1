import _ from 'lodash';

export default class BaseSchema {
  constructor() {
    this.checks = [];
    this.requiredValue = false;
  }

  isValid(value) {
    if (!this.requiredValue && _.isNil(value)) {
      return true;
    }

    return this.checks.every(({ validate, args }) => validate(value, ...args));
  }

  test(validatorName, value) {
    this.checks.push({
      validate: this.constructor.validators[validatorName],
      args: [value],
    });
    return this;
  }
}
