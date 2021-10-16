const Joi = require('joi');

export function validateUser(user: User.IUser) {
    const JoiSchema = Joi.object({
        name: Joi.string()
            .min(5)
            .max(30)
            .required(),
        email: Joi.string()
            .email()
            .min(5)
            .max(50)
            .optional(),
        age: Joi.number()
            .optional(),
    })

    return JoiSchema.validate(user);
}

