import _ from "lodash";
import BaseSchema from "./schema.js";

export default class NumberSchema extends BaseSchema {
  required() {
    this.tests.required = (val) => _.isFinite(val);
    return this;
  }

  positive() {
    this.tests.positive = (val) => val > 0;
    return this;
  }

  range(start, end) {
    const range = _.range(start, end);
    this.tests.range = (val) => _.includes(range, val);
    return this;
  }
}
