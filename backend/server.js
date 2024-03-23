const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb+srv://pvenkat6:6TaCSPSr5MSp8Kar@cluster0.ipw5bph.mongodb.net/personal_budget');
const budgetSchema = new mongoose.Schema({
    //id:{type: String},
    myBudget: [{ title: {type: String}, budget: {type:Number}, color: {type:String} }],
   // date:{type: Date}
},{collection:'budget'});
//var Schema = mongoose.Schema;
//var budgetSchema = new Schema({ id:String, myBudget: [{ title: String, budget: Number, color: String }],date:Date });

    var id = '65e1350755d7cc09759c7034';
const BudgetData = mongoose.model('BudgetData', budgetSchema);

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to create a new user
app.post('/budget', async (req, res) => {
  try {
    const item  = { title: req.body.title, budget: req.body.budget, color: req.body.color};

    const newBudget =  await BudgetData.findById(id);

    newBudget.myBudget.push(item);


    newBudget.save().then(result => {
        console.log(result);
        res.status(201).json(result);
    });
    
  // res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
    }   
}
    );

// Route to get all users
app.get('/budget', async (req, res) => {
  try {
    BudgetData.find().then(result => {
        id = result[0]._id;
        console.log(result);
        res.json(result);
        }
    );
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
}   );

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
