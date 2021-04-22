export default class Validator {
  constructor() {
    this.rules = {};
  }

  string() {
    this.rules.string = (val) => typeof val === 'string';
    return this;
  }

  required() {
    this.rules.required = (val) => val !== undefined && val !== null && val !== '';
    return this;
  }

  contains(substr) {
    const containsValidator = (val, substr) => val.includes(substr);
    this.rules.contains = (val) => containsValidator(val, substr);
    return this;
  }

  isValid(str) {
    return Object.keys(this.rules)
      .every(
        key => this.rules[key](str)
      );
  }
}
