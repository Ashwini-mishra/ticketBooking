import express from 'express';
import * as user  from '../user/userController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as userSchema from './userValidation.js';

const router = express.Router();

/**
 * create user
 */
router.post(
    '/user',
    validation(userSchema.create()),
    user.createUser
);

/**
 * create booking
 */
router.post(
    '/booking/user/:id',
    validation(userSchema.booking()),
    user.createBooking
);

export default router;
