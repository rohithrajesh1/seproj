import React from 'react';
import { Link } from 'react-router-dom';

const signout=()=>{
  localStorage.clear()
}
const Navigation = ({ onRouteChange }) => {
      var isSignedIn=0;
      if(localStorage.getItem('usermail')){
        isSignedIn=1
      }

      
      return (
        // <nav style={{display: 'flex', justifyContent: 'flex-start',marginInlineStart:'33%'}}>
          
        //   <h3 onClick={() => onRouteChange('home')} className='f3 link  black underline pa3 pointer left '>Room Occupancy Chart Generator App</h3>
        // </nav>
        <header className="bg-black-60 w-100 ph3 pv3  ph4-m ph5-l" >
          <nav className="f6 fw6 ttu tracked">
          <Link to="/">
          <a
            className="link dim white dib mr3"
            href="#"
            title="Home"
          >
          
            Room Occupancy Chart Generator App
          </a>
          
          </Link>
          
          {isSignedIn===1?

          <a
            className="link dim white dib mr3"
            href="#"
            title="Home"
            onClick={signout}
            
          >
          
            Sign Out
               </a>
          :
          <p></p>
          

          }


          </nav>
        </header>
        
      );
    
}

export default Navigation;