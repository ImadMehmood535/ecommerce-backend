const Joi = require("joi");

const productScehma = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    name: Joi.string().min(4).max(20).required(),
    price: Joi.number().min(1).required(),
    userId : Joi.number().min(1).required(),
  }),
});

module.exports = { productScehma };
