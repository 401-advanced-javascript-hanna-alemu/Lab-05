'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name : { 
    type : String,
    required : 'true'
  },
  category : {
    type : String,
    required : 'true'
  },
  price : {
    type : Number,
  },
  available : {
    type : Boolean,
  }
});

module.exports = mongoose.model( 'products', products );