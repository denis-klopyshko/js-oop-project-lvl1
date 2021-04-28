import BaseSchema from './schema.js';

export default class ObjectSchema extends BaseSchema {
  constructor() {
    super();
    this.validators = {
      shape: (val, ...shapeObj) =>
        shapeObj.every(([key, schema]) => schema.isValid(val[key])),
    };

    this.checks = [];
  }

  shape(shapeObj) {
    const objectData = Object.entries(shapeObj);
    this.checks.push({
      validate: this.validators.shape,
      args: [...objectData],
    });

    return this;
  }
}
