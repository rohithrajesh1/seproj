import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-start',marginInlineStart:'33%'}}>
          
          <h3 onClick={() => onRouteChange('home')} className='f3 link  black underline pa3 pointer left '>Room Occupancy Chart Generator App</h3>
        </nav>
        
      );
    
}

export default Navigation;