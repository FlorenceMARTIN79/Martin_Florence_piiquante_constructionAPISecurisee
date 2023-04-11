const express = require("express");
const User = require("./models/user");

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://P6_FlorenceMartin:laSaucepIque6@cluster0.tojvceg.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post("/api/auth/signup", (req, res, next) => {
  const user = new User({
    ...req.body
  });
  user.save()
  .then(() => res.status(201).json({message/*: "Mot de passe utilisateur haché - Utilisateur ajouté à la base de données !"*/}))
  .catch(error => res.status(400).json({error}));
});

app.post("/api/auth/login", (req, res, next) => {

})

app.use((req, res) => {
    res.json({message:"blablatest"});
});

module.exports = app;