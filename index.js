'use strict';

const mongoose = require('mongoose');

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb+srv://hanna9:estifaman9@cluster0-s90so.mongodb.net/test?retryWrites=true&w=majority';

// Connect
mongoose.connect(MONGOOSE_URI, {useNewUrlParser: true,});

// Require your model
const Categories = require('./models-singular/categories');


const categories = new Categories();

const doStuff = async () => {
  const sampleCategory = {
    name: 'Music',
    description: 'My playlist',
  };

  let newCategory = await categories.create(sampleCategory);

  let oneCategory = await categories.get(sampleCategory);
 
};
doStuff();
