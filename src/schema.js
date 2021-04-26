export default class BaseSchema {
  constructor() {
    this.tests = {};
  }

  isValid(value) {
    return Object.keys(this.tests).every((key) => this.tests[key](value));
  }
}
