export default class BaseSchema {
  isValid(value) {
    return this.checks.reduce(
      (acc, { validate, args }) => validate(value, ...args),
      false
    );
  }

  test(validatorName, value) {
    this.checks.push({
      validate: this.constructor.validators[validatorName],
      args: [value],
    });
    return this;
  }
}
