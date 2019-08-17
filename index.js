'use strict';

const mongoose = require('mongoose');

// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb+srv://hanna9:estifaman9@cluster0-s90so.mongodb.net/test?retryWrites=true&w=majority';

// Connect
mongoose.connect(MONGOOSE_URI, {useNewUrlParser: true,});

// Do some work

// Disconnect
mongoose.disconnect();