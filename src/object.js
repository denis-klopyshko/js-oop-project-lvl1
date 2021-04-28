import BaseSchema from './schema.js';

export default class ObjectSchema extends BaseSchema {
  shape(shapeObj) {
    const objectData = Object.entries(shapeObj);
    this.checks.push({
      validate: this.constructor.validators.shape,
      args: [...objectData],
    });

    return this;
  }
}

ObjectSchema.validators = {
  shape: (val, ...shapeObj) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    shapeObj.every(([key, schema]) => schema.isValid(val[key])),
};
