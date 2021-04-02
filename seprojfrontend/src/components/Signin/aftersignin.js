import React from 'react';
import pic1 from './welcome.svg';


class aftersignin extends React.Component {
    constructor(props) {
        super(props);
        
      }

    onClickReserve= () => {
    document.getElementById('reserops').className="show";
    }
      
    render() {
        const { onRouteChange } = this.props;
        return (
            <div>
            <div style={{ marginLeft:"0%",marginRight:"0%", textAlign: "center"}}>
            <h1 >Welcome! Glad to have you here</h1>
            </div>
            <div class="mw9 center ph3-ns">
                <div class="cf ph2-ns">
                    <div class="fl w-100 w-33-ns pa2 ">
                    <img style={{paddingTop: '5px', marginTop:"10%", marginLeft:"106%"}} alt='pic1' src={pic1} width="450" height="250"/>
                </div>

               

                </div>

                
            </div>
            <h2 style={{ marginLeft:"0%",marginRight:"0%", textAlign: "center"}}>Are you here for reservation or cancellation?</h2>
            <h2 style={{ marginLeft:"0%",marginRight:"0%", textAlign: "center"}}>Please find the appropriate option below &#8595;</h2>

            
            <div class="mw9 center ph3-ns">
                <div class="cf ph2-ns">
                    <div class="fl w-100 w-50-ns pa2">
                    <div class="ph3 mb4 ma4">

                <a class="f2 link dim br3 ba bw2 ph3 pv2 mb2 dib" id="reser" onClick={this.onClickReserve} style={{ marginLeft:"35%",marginRight:"0%"}}  href="#0" >Reservation</a>

            </div>
                    </div>
                    <div class="fl w-100 w-50-ns pa2 center">
                        <div class="ph3 mb4 ma4" style={{ marginLeft:"20%",marginRight:"30%"}}>

                        <a class="f2 link dim br3 ba bw2 ph3 pv2 mb2 dib  "   href="#0">Cancellation</a>


                        </div>
                    </div>
                </div>
            </div>

            <div id="reserops" className="hide" >
            <input
                onClick={() => onRouteChange('timetable')}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                type="submit"
                id="usingtt"
                value="Reserve using timetable"
                style={{ marginLeft:"20.5%",marginRight:"0%"}}
                
              />
              <h3 style={{ marginLeft:"28%",marginRight:"0%"}}>OR</h3>
              <input
                
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                type="submit"
                id="usingtt"
                value="Reserve for a particular period"
                style={{ marginLeft:"19%",marginRight:"0%"}}
              />

            </div>


        </div>


        );

    }
}

export default aftersignin;