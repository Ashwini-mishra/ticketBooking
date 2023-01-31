import mongoose from 'mongoose';

const moviechema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    certificate:{
        type: String,
        required: true,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

});

const Movie =  mongoose.model('movie', moviechema);

export default Movie;
