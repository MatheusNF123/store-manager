const Joi = require('joi');

const idSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
});
  
const productValidation = Joi.object({
  name: Joi.string().min(5).required().messages({
    'string.min': '"name" length must be at least 5 characters long',
    'any.required': '"name" is required',
  }),
});

 const salesProductValidation = Joi.array().items({
   productId: Joi.number().required().messages({
     'any.required': '"productId" is required',
   }),
   quantity: Joi.number().min(1).required().messages({
     'number.min': '"quantity" must be greater than or equal to 1',
     'any.required': '"quantity" is required',
   }),
 });

  module.exports = {
    idSchema,
    productValidation,
    salesProductValidation,
  };
