import mongoose from 'mongoose';

const showschema = mongoose.Schema({

    theaters: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'theaters',
    },
    movie:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movie',
    },
    date:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

});

const Shows =  mongoose.model('shows', showschema);

export default Shows;
