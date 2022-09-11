const Joi = require('joi');

const idSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
});
  
const productValidation = Joi.object({
  name: Joi.string().min(5).required(),
});

 const salesProductValidation = Joi.array().items({
    productId: Joi.number().required(),
    quantity: Joi.number().min(1).required(),
  });
// }); 
// const pointSchema = Joi.string().min(3).required();

// const waypointSchema = Joi.object({
//   address: pointSchema,
//   stopOrder: Joi.number().integer().min(1) });

// const addRequestTravelSchema = Joi.object({
//   passengerId: idSchema,
//   startingAddress: pointSchema.label('startingAddress'),
//   endingAddress: pointSchema.invalid(Joi.ref('startingAddress')),
//   waypoints: Joi.array().items(waypointSchema) });

  module.exports = {
    idSchema,
    productValidation,
    salesProductValidation,
  };