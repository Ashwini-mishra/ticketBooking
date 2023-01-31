import express from 'express';
import * as movie  from '../movies/moviesController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as movieSchema from './moviesValidation.js';

const router = express.Router();

/**
 * create Movie
 */
router.post(
    '/movie',
    validation(movieSchema.create()),
    movie.createMovies
);

/**
 * get Movie
 */
router.get(
    '/movie',
    movie.getAllMovies
);
export default router;
