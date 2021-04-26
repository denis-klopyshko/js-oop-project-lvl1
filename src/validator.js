import _ from "lodash";
import StringSchema from "./string.js";
import NumberSchema from "./number.js";

export default class Validator {
  constructor() {
    this.schemas = {
      str: StringSchema,
      num: NumberSchema,
    };
  }

  string() {
    const schemaName = this.schemas["str"];
    return new schemaName();
  }

  number() {
    const schemaName = this.schemas["num"];
    return new schemaName();
  }
}
