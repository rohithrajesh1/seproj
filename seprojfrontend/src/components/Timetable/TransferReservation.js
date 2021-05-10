import React from 'react';

class TransferReservation extends React.Component {

    render() {
        const { onRouteChange } = this.props;
        return (

            <div>
                <h2 class="f6 f2-m f2-l fw6 black-90 mv3 b center" style={{marginTop:"2%",marginLeft:"2%"}}>
                    You can transfer reservation to another teacher in this window:      
                </h2>

                <article class="mw6 center bg-white br3   mv3 ba b--black-10" style={{marginTop:"5%"}}>
                    <div class="tc">
                        <h1 class="f4">Fill in these details</h1>

                        <hr class="mw3 bb bw1 b--black-10"></hr>
                    </div>
                    
                    <form class="pa4 black-80">
                        <label  class="f6 b db mb2">Class</label>
                        <input id="class" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                        <label  class="f6 b db mb2">Subject</label>
                        <input id="subject" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                        <label  class="f6 b db mb2">Day</label>
                        <input id="day" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                        <label  class="f6 b db mb2">Period</label>
                        <input id="period" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                        <label  class="f6 b db mb2">Room number</label>
                        <input id="period" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                        <label  class="f6 b db mb2">Enter e-mail id corresponding teacher</label>
                        <input id="period" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                        
                    
                    </form>
                    <div align="center">
                        <input
                            
                            className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-red b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Transfer Reservation"
                            style={{marginBottom:"10%"}}

                        />
                    </div>
                    
                </article>



            </div>



        );

    }






}

export default TransferReservation;