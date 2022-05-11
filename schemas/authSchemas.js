import Joi from "joi";

export const signUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.email().required(),
    password: Joi.string().required(),
    confirmedPassword: Joi.ref('password'),
    urlImage: Joi.string().uri()
});

export const signInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});