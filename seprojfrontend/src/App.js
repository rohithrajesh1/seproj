import React, {Component} from 'react';
import logo from './logo.svg';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
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

      <Register></Register>
      
    );
  }  
}  


export default App;
