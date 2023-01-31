import Joi from 'joi';

/**
 *
 * create user
 */
const create = () =>{
    return Joi.object({
        firstName: Joi.string().required(),
        middleName: Joi.string().allow(''),
        lastName: Joi.string().allow(''),
        mobile: Joi.string().required(),
        address: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
};


/**
 *
 * create booking
 */
const booking = () =>{
    return Joi.object({
        ticket: Joi.string().required(),
    });
};

export{
    create,
    booking,
};
