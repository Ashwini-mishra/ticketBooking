import express from 'express';
import * as shows  from '../shows/showsController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as showsSchema from './showsValidation.js';

const router = express.Router();

/**
 * create shows
 */
router.post(
    '/shows',
    validation(showsSchema.create()),
    shows.createShows
);

/**
 * getAll shows
 */
router.get(
    '/shows',
    shows.getAllShows
);
export default router;
