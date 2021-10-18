import { validationMessages } from "./../../helper/commonUtils";

const Joi = require('joi');

export function validateUser(user: User.IUser) {
    const JoiSchema = Joi.object({
        name: Joi.string()
            .min(validationMessages.NAME_MIN_LENGTH)
            .max(validationMessages.NAME_MAX_LENGTH)
            .required(),
        email: Joi.string()
            .email()
            .min(validationMessages.EMAIL_MIN_LENGTH)
            .max(validationMessages.EMAIL_MAX_LENGTH)
            .optional(),
        age: Joi.number()
            .optional(),
    })

    return JoiSchema.validate(user);
}

