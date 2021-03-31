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
  
}

class App extends Component{
  constructor(){ 
    super();
    this.state=initialState;

  }
  onRouteChange = (route) => {
    
    this.setState({route: route});
  }
  render() {
    const {route} = this.state;
    return (
      <div>

          { route === 'signin'
            ? <div>
                <Signin onRouteChange={this.onRouteChange}/>
                
              </div>
            : (
              route === 'register'
              ? <Register/>
              
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              )
          }
      </div>
      
    );
  }  
}  


export default App;
