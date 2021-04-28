export default class BaseSchema {
  constructor() {
    this.checks = [];
  }

  isValid(value) {
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
