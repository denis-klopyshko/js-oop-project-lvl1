export default class BaseSchema {
  isValid(value) {
    return this.checks.reduce(
      (acc, { validate, args }) => validate(value, ...args),
      false
    );
  }
}
