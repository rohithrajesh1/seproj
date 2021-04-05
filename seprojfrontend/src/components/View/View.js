import React from 'react';


class View extends React.Component {
    constructor(props) {
        super(props);
        
      }

    
    render() {
        const { onRouteChange } = this.props;
        return (
            <header class="tc ph4">
                <div className="br3  b--black-10 mv4 w-100-m w-100-l mw12 shadow-5 center "> 

                    <h1 class="f3 f2-m f1-l fw6 black-90 mv3 b " style={{marginTop:"4%",paddingTop:"2%",paddingBottom:"2%",backgroundColor:"beige"}} >
                        You can view timetables and occupancy charts here
                    </h1>
                </div>    
                <div className="br3 ba b--black-90 mw6 mv4 w-100-m w-100-l mw12 shadow-5 ma3 center pa9 b ">
                    
                <h3 class=" f4-m f3-l fw2 black mt0 lh-copy black fw9">
                    Which among the following do you want to access?
                </h3>
                <h4>Choose the right option and you will be redirected to that particular window</h4>
                </div>

                <div className="" style={{textAlign:'center',marginTop:"6%"}}>
                    <input
                        onClick={() => onRouteChange('dispcltimetable')}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f2 blue dib"
                        type="button"
                        id="clt"
                        value="  Get class timetable  "

                    />
                </div>

                <div class="mw9 center ph3-ns">
                <div class="cf ph2-ns">
                    <div class="fl w-100 w-50-ns pa2">
                    <div className="" style={{textAlign:'center',marginTop:"5%"}}>
                    <input
                        onClick={() => onRouteChange('dispproftimetable')}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f2 blue dib"
                        type="button"
                        id="pt"
                        value="  Get professor timetable  "

                        />
                    </div>
                    </div>
                    <div class="fl w-100 w-50-ns pa2">
                    <div className="" style={{textAlign:'center',marginTop:"5%"}}>
                    <input
                        onClick={() => onRouteChange('disproomtimetable')}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f2 blue dib"
                        type="button"
                        id="roc"
                        value="Get room occupancy chart"

                        />
                    </div>
                    </div>
                </div>
                </div>




                </header>

        );

    }
}

export default View;