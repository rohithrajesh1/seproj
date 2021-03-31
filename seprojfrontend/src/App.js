import React, {Component} from 'react';
import logo from './logo.svg';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Timetable from './components/Timetable/Timetable';
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
<<<<<<< HEAD
        <Timetable/>
        {/* <Navigation/>
        <Signin/>
=======
        {/* <Navigation/>
        <Signin/> */}
>>>>>>> 9cfe1ee2dc7a75a4d7e410ec3c2f8efbe5acadf8

        <Register/> */}
      </div>
      
    );
  }  
}  


export default App;
