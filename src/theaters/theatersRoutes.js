import express from 'express';
import * as theaters  from '../theaters/theatersController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as theatersSchema from './theatersValidation.js';

const router = express.Router();

/**
 * create theaters
 */
router.post(
    '/theaters',
    validation(theatersSchema.create()),
    theaters.createTheaters
);


/**
 * get theaters
 */
router.get(
    '/theaters',
    theaters.getAllTheaters
);
export default router;
