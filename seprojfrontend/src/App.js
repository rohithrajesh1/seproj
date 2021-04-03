import React, {Component} from 'react';
import logo from './logo.svg';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Timetable from './components/Timetable/Timetable';
import Getdata from './components/Timetable/Getdata';
import ClassTimeTable from './components/Timetable/ClassTimeTable';
import ProfessorTimetable from './components/Timetable/ProfessorTimetable';
import OccupancyChart from './components/Timetable/OccupancyChart';
import Home from './components/Home/Home';
import Aftersignin from './components/Signin/aftersignin'
import Forgotpass from './components/Forgotpass/Forgotpass';

import './App.css';
import 'tachyons'; 
const initialState={
  input:'',
  route:'home',
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
        
        <Navigation onRouteChange={this.onRouteChange}/>
        {/* <OccupancyChart onRouteChange={this.onRouteChange}/> */}
        
          {  route === 'home'
            ? 
              <Home onRouteChange={this.onRouteChange}/>

            : 
              route === 'register'
              ? 
                <Register onRouteChange={this.onRouteChange}/>
              : route === 'signin'
                ?
                  <Signin onRouteChange={this.onRouteChange}/>
                : route === 'aftersignin'
                  ?
                  <Aftersignin onRouteChange={this.onRouteChange}/>
                  : route==='forgotpass'
                    ?
                    <Forgotpass onRouteChange={this.onRouteChange}/>
                    :route==='settimetable'
                      ?
                      <Getdata choice={'restimetable'} onRouteChange={this.onRouteChange}/>
                      :route==='dispcltimetable'
                        ?
                        <Getdata choice={'dispcltimetable'} onRouteChange={this.onRouteChange}/>
                        :route==='disproomtimetable'
                          ?
                          <Getdata choice={'disproomtimetable'} onRouteChange={this.onRouteChange}/>
                          :route==='dispproftimetable'
                            ?
                            <Getdata choice={'dispproftimetable'} onRouteChange={this.onRouteChange}/>
                            :<Getdata choice={'disproomtimetable'} onRouteChange={this.onRouteChange}/>


                          
              
          }
      </div>
      
    );
  }  
}  


export default App;
