const mongoose = require('mongoose');

const SchemaOneSchema = new mongoose.Schema(
{
    field1: { 
        type: String,
        required: true,
        unique: false
    },
field2 : [
{ 
  
   field2Array: { 
        type: Number,
        required: false,
        unique: false
    
},
}
],
});

module.exports = mongoose.model('SchemaOne', SchemaOneSchema);
