const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');

const login = require('./controllers/login');
const register= require('./controllers/register')
const otp = require('./controllers/otp');
const getTeachers= require('./controllers/getTeachers');
const storeTimetable=require('./controllers/storeTimetable');
const getTeacherTimetable=require('./controllers/getTeacherTimetable');
const getClassTimetable=require('./controllers/getClassTimetable');
const getRommOccchart=require('./controllers/getRoomOccchart');


const db = knex({
    client: 'pg',
    /*connection: {
      host : 'roomoccupancy.postgres.database.azure.com',
      user : 'dhanvanth_06@roomoccupancy',
      password : 'Thudu@123',
      database : 'roomoccupancy',
      ssl: true
    }*/
    connection: {
      host : 'localhost',
      port: 5432,
      user : 'postgres',
      password : 'Thudu',
      database : 'roomoccupancy',
    }
  });


const app = express();

app.use(bodyParser.json());

app.use(cors());

db.select('email','name').from('teachers').then(data=>{
    console.log(data);
});

app.post('/login', (req,res) => { login.handleLogin(req,res,db)} )
app.post('/register', (req,res) => { register.handleRegister(req,res,db)} )
app.post('/otp', (req,res) => { otp.handleotp(req,res)} )
app.post('/verifyotp', (req,res) => { otp.handleverifyotp(req,res)} )
app.post('/getTeachers', (req,res) => { getTeachers.handleGetTeachers(req,res,db)} )
app.post('/storeTimetable', (req,res) => { storeTimetable.onStoreTimetable(req,res,db)} )
app.post('/getTeacherTimetable',(req,res)=>{getTeacherTimetable.handleGetTeacherTimetable(req,res,db)})
app.post('/getClassTimetable',(req,res)=>{getClassTimetable.handleGetClassTimetable(req,res,db)})
app.post('/getRoomOccchart',(req,res)=>{getRommOccchart.handleGetRoomOccchart(req,res,db)})

app.listen( 2500 , ()=>{
    console.log('Server running on port 2500');
})