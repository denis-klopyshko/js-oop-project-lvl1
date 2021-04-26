import _ from "lodash";
import BaseSchema from "./schema.js";

export default class StringSchema extends BaseSchema {
  required() {
    this.tests.required = (val) => _.isString(val);
    return this;
  }

  minLength(len) {
    this.tests.minLength = (val) => val.length >= len;
    return this;
  }

  contains(substr) {
    const containsValidator = (val, substr) => _.includes(val, substr);
    this.tests.contains = (val) => containsValidator(val, substr);
    return this;
  }
}
