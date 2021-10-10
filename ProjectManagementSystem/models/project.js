const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
    {
        name: {type:String, required:true},
        location: {
            type:String,
            enum: ['KKM', 'BA', 'IE']
        }
    }
);

module.exports = mongoose.model('Project', ProjectSchema);