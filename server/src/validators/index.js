import { body, query } from "express-validator";

const getAllTodosQueryValidators = () => {
  return [
    query("query").optional(),
    query("complete")
      .optional()
      .isBoolean({
        loose: true,
      })
      .withMessage("complete flag must be a boolean."),
  ];
};

const createTodoValidator = () => {
  return [
    body("title").trim().notEmpty().withMessage("Todo title is required"),
    body("description")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Todo title is required"),
    body("priority").isNumeric(),
    body("category").trim().notEmpty().withMessage("Todo category is required"),
    body("userId").notEmpty().withMessage("userId is required"),
  ];
};

const updateTodoValidator = () => {
  return [
    body("title")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Todo title is required"),
    body("description")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Todo title is required"),
      body("priority").isNumeric(),
    body("category").trim().notEmpty().withMessage("Todo category is required"),
    body("userId").trim().notEmpty().withMessage("userId is required"),
  ];
};


export {
  createTodoValidator,
  updateTodoValidator,
  getAllTodosQueryValidators,
};
