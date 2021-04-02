import React from 'react';

const Navigation = ({ onRouteChange }) => {
      return (
        // <nav style={{display: 'flex', justifyContent: 'flex-start',marginInlineStart:'33%'}}>
          
        //   <h3 onClick={() => onRouteChange('home')} className='f3 link  black underline pa3 pointer left '>Room Occupancy Chart Generator App</h3>
        // </nav>
        <header className="bg-black-60 w-100 ph3 pv3  ph4-m ph5-l" >
          <nav className="f6 fw6 ttu tracked">
          <a
            className="link dim white dib mr3"
            href="#"
            onClick={() => onRouteChange('home')}
            title="Home"
          >
          Room Occupancy Chart Generator App
          </a>
          
          </nav>
        </header>
        
      );
    
}

export default Navigation;