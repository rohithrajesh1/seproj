import React from 'react';

class TransferReservation extends React.Component {


    onClickTransfer=() =>{
        var secnumbera=document.getElementById("classa").value;
        var secnumberb=document.getElementById("classb").value;
        var day=document.getElementById("day").value;
        var period=document.getElementById("period").value;
        var subject=document.getElementById("subject").value;
        var emaila=localStorage.getItem("usermail");
        var emailb=document.getElementById("emailb").value;
        //var perm=document.getElementById("cancelperm").checked;
        var roomnumber=document.getElementById("room").value;
        //console.log(secnumber,email,perm)

        fetch('http://localhost:2500/onTransfer', {
            method:'post',
            headers: {'Content-Type':'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({
                emaila:emaila,
                emailb:emailb,
                secnumbera:secnumbera,
                secnumberb:secnumberb,
                roomnumber:roomnumber, 
                subject:subject,
                day:day,
                period:period
            })
            })
            .then(response => response.json())
            .then(status=>{
                if(status.status==="Success"){
                    alert("Successfully tranferred reservation")
        
                    
                }
                else{
                    alert("Transfer Failed! Check the data entered")
                }
                })
    


        }

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
                        <label  class="f6 b db mb2">Previously Scheduled Class</label>
                        <input id="classa" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                        <label  class="f6 b db mb2">New Class</label>
                        <input id="classb" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                        <label  class="f6 b db mb2">Subject</label>
                        <input id="subject" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                        <label  class="f6 b db mb2">Day</label>
                        <input id="day" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                        <label  class="f6 b db mb2">Period</label>
                        <input id="period" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                        <label  class="f6 b db mb2">Room number</label>
                        <input id="room" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
                        <label  class="f6 b db mb2">Enter e-mail id corresponding teacher</label>
                        <input id="emailb" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
    
                        
                    
                    </form>
                    <div align="center">
                        <input
                            
                            className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-red b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Transfer Reservation"
                            onClick={this.onClickTransfer}
                            style={{marginBottom:"10%"}}

                        />
                    </div>
                    
                </article>



            </div>



        );

    }






}

export default TransferReservation;