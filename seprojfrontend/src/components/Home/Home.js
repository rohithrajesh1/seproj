import React from 'react';
import pic1 from './undraw1.svg';
import pic2 from './undraw2.svg';
import pic3 from './undraw3.svg';
import './Home.css';
class Home extends React.Component {
    render() {
        return (

            <article>
                <div class="mw9 center ph3-ns">
                    <div class="cf ph2-ns">
                        <div class="fl w-100 w-33-ns pa2 ">
                        <img style={{paddingTop: '5px', marginTop:"2%", marginLeft:"4%"}} alt='pic1' src={pic1} width="450" height="250"/>
                            </div>
                        <div class="fl w-100 w-33-ns pa2">
                        <img style={{paddingTop: '5px', marginTop:"2%",marginLeft:"10%"}} alt='pic2' src={pic3} width="450" height="250"/>
                        </div>
                        <div class="fl w-100 w-33-ns pa2">
                        <img style={{paddingTop: '5px', marginTop:"2%",marginLeft:"10%"}} alt='pic2' src={pic2} width="450" height="250"/>
                        </div>

                    </div>
                </div>
        
                <header class="tc ph4">
                <div className="br3 ba b--black-10 mv4 w-100-m w-100-l mw12 shadow-5 ma3 center pa9 bg--home"> 

                    <h1 class="f3 f2-m f1-l fw6 black-90 mv3 b " style={{marginTop:"8%"}}>
                        Welcome to our Room Occupancy Chart Generation Application
                    </h1>
                </div>    
                <div className="br3 ba b--black-90 mw6 mv4 w-100-m w-100-l mw12 shadow-5 ma3 center pa9 b ">
                <h1 class="f5 f4-m f3-l fw2 black-1000 mt0 lh-copy dark-blue fw9">
                    What do you want to do?
                </h1>
                </div>


                </header>

                

                <div class="mw9 center ph3-ns">
                    <div class="cf ph2-ns">
                        <div class="fl w-100 w-50-ns pa2">
                        <div class="ph3 mb4 ma4">

                    <a class="f2 link dim br3 ba bw2 ph3 pv2 mb2 dib  dark-red "  href="#0">Reserve a room or Cancel a room booking </a>

                </div>
                        </div>
                        <div class="fl w-100 w-50-ns pa2 center">
                            <div class="ph3 mb4 ma4">

                            <a class="f2 link dim br3 ba bw2 ph3 pv2 mb2 dib  dark-red "  href="#0">View Timetables or Room Occupancy Charts</a>

                            </div>
                        </div>
                    </div>
                </div>

            </article>     


        );


    }

}


export default Home;