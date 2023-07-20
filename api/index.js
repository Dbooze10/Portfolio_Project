const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User')
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dbooze10:<Des22023>@cluster0.rsix6fu.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.create({username, password});
    res.json(userDoc);
});

app.listen(3000);
