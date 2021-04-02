import React, {Component} from 'react';
import logo from './logo.svg';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Timetable from './components/Timetable/Timetable';
import Getdata from './components/Timetable/Getdata';
import Home from './components/Home/Home';
import './App.css';
import 'tachyons'; 
const initialState={
  input:'',
  route:'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}
class App extends Component{
  render() {
    return (
      <div>
        <Getdata/>

      </div>
      
    );
  }  
}  


export default App;
