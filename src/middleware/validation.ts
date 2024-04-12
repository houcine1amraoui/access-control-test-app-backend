import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateCategoryRequest = [
  body("name").isString().notEmpty().withMessage("name must be a string"),
  handleValidationErrors,
];

export const validateProviderRequest = [
  body("firstName")
    .isString()
    .notEmpty()
    .withMessage("Firstname must be a string"),
  body("lastName")
    .isString()
    .notEmpty()
    .withMessage("Lastname must be a string"),
  body("mobile").isString().notEmpty().withMessage("Mobile must be a string"),
  // body("isIndividual")
  //   .isString()
  //   .notEmpty()
  //   .withMessage("isIndividual must be a string"),
  // body("isRegistredOffice")
  //   .isString()
  //   .notEmpty()
  //   .withMessage("isRegistredOffice must be a string"),
  // body("officeAddress")
  //   .isString()
  //   .notEmpty()
  //   .withMessage("officeAddress must be a string"),
  // body("zip").isString().notEmpty().withMessage("zip must be a string"),
  // body("description")
  //   .isString()
  //   .notEmpty()
  //   .withMessage("description must be a string"),
  handleValidationErrors,
];

export const validateCustomerRequest = [
  body("firstName")
    .isString()
    .notEmpty()
    .withMessage("Firstname must be a string"),
  body("lastName")
    .isString()
    .notEmpty()
    .withMessage("Lastname must be a string"),
  body("mobile").isString().notEmpty().withMessage("Mobile must be a string"),
  handleValidationErrors,
];

export const validateServiceRequest = [
  body("name").notEmpty().withMessage("Service name is required"),
  body("description").notEmpty().withMessage("Service description is required"),
  body("categoryId").notEmpty().withMessage("Category ID is required"),
  handleValidationErrors,
];
