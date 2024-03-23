const mongoose = require('mongoose');
const Budget = new mongoose.Schema({
    id:{type: String},
    myBudget: [{ title: {type: String}, budget: {type:Number}, color: {type:String} }],
    date:{type: Date}
});
module.exports = mongoose.model('Budget', Budget);