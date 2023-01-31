import mongoose from 'mongoose';

const theaterSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

});

const Theaters =  mongoose.model('theaters', theaterSchema);

export default Theaters;
