import { unique } from '#utils';
import { check } from 'express-validator';
import ExampleModel from './example.model.js';

const commonRules = () => {
  return [
    check('name')
      .notEmpty()
      .withMessage('Name is required')
      .matches(/^[a-zA-Z0-9 ]+$/)
      .withMessage('Name must be alphanumeric'),
  ];
};

const exampleCreateRules = () => {
  // METHOD CHAINING
  return [
    ...commonRules(),
    check('name')
      .custom((value) => unique(ExampleModel, 'name', value))
      .withMessage('Name must be unique'),
  ];
};

const exampleUpdateRules = () => {
  return [
    ...commonRules(),
    check('name')
      .custom((value, { req }) => unique(ExampleModel, 'name', value, req?.params?.id))
      .withMessage('Name must be unique'),
  ];
};
export { exampleCreateRules, exampleUpdateRules };

// // USING SCHEMA: BUT i don't like it
// return checkSchema({
//   name: {
//     notEmpty: { errorMessage: 'Name is required!' },
//   },
// });
