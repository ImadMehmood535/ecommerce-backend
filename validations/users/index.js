const Joi = require("joi");

const registerScehma = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    email: Joi.string().email().max(100).required(),
    password: Joi.string().min(8).max(20).required(),
    name: Joi.string().min(4).max(20).required()
  }),
});

module.exports = {registerScehma}