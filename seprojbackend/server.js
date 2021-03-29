const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');

const login = require('./controllers/login');
const register= require('./controllers/register')

const db = knex({
    client: 'pg',
    connection: {
      host : 'roomoccupancy.postgres.database.azure.com',
      user : 'dhanvanth_06@roomoccupancy',
      password : 'Thudu@123',
      database : 'roomoccupancy',
      ssl: true
    }
  });


const app = express();

app.use(bodyParser.json());
app.use(cors());

db.select('*').from('teachers').then(data=>{
    console.log(data);
});

app.post('/login', (req,res) => { login.handleLogin(req,res,db)} )
app.post('/register', (req,res) => { register.handleRegister(req,res,db)} )

app.listen( 2500 , ()=>{
    console.log('Server running on port 2500');
})