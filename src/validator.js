import _ from "lodash";
import StringSchema from "./string.js";
import NumberSchema from "./number.js";

export default class Validator {
  constructor() {
    this.validators = {
      str: StringSchema,
      num: NumberSchema,
    };
  }

  string() {
    const schemaName = this.validators["str"];
    return new schemaName();
  }

  number() {
    const schemaName = this.validators["num"];
    return new schemaName();
  }
}
