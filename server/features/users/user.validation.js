import { check } from 'express-validator';

const matchPassword = (value, { req }) => {
  if (value !== req.body.confirm_password) throw new Error('Password does not match!');
  return value;
};

const userCreateRules = () => {
  // METHOD CHAINING
  return [
    check('email').isEmail().withMessage('Email is invalid'),

    check('username')
      .notEmpty()
      .withMessage('Username is required')
      .matches(/^[a-zA-Z0-9 ]+$/)
      .withMessage('Username must be alphanumeric'),

    check('password')
      .isLength({ min: 6, max: 20 })
      .withMessage('Password must be between 6 and 20 characters')
      .custom(matchPassword),
  ];
};

const userUpdateRules = () => {
  return [
    check('email').isEmail().withMessage('Email is invalid').optional(),
    check('username')
      .optional()
      .isString()
      .notEmpty()
      .withMessage('Username is required')
      .matches(/^[a-zA-Z0-9 ]+$/)
      .withMessage('Username must be alphanumeric'),

    check('password')
      .optional()
      .isLength({ min: 6, max: 20 })
      .withMessage('Password must be between 6 and 20 characters')
      .custom(matchPassword),
  ];
};

export { userCreateRules, userUpdateRules };

// // USING SCHEMA: BUT i don't like it
// return checkSchema({
//   name: {
//     notEmpty: { errorMessage: 'Username is required!' },
//   },
//   email: {
//     isEmail: { errorMessage: 'Email is invalid!' },
//     notEmpty: { errorMessage: 'Email is required!' },
//   },
//   password: {
//     isLength: {
//       errorMessage: 'Password must be between 6 and 20 characters!',
//       options: { min: 6, max: 20 },
//     },
//   },
//   password_confirmation: {
//     custom: {
//       errorMessage: 'Password does not match!',
//       options: matchPassword,
//     },
//   },
// });
