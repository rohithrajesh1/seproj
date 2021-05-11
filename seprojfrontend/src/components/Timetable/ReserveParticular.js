import React from 'react';

class ReserveParticular extends React.Component {

    onClickReserve=() =>{
        var secnumber=document.getElementById("class").value;
        var subject=document.getElementById("subject").value;
        var day=document.getElementById("day").value;
        var period=document.getElementById("period").value;
        var email=localStorage.getItem("usermail");
        var perm=document.getElementById("reserveperm").checked;
        console.log(secnumber,email,perm)

        if(perm===true){
            fetch('http://localhost:2500/reserveOnePeriod', {
                method:'post',
                headers: {'Content-Type':'application/json',
                'Accept': 'application/json'
                },
                body: JSON.stringify({
                    secnumber:secnumber,
                    day:day,
                    period:period,
                    subject:subject,
                    email:email
                })
                })
                .then(response => response.json())
                .then(status=>{
                    if(status.status==="Success"){
                      alert("Successfully Reserved Permanently")
            
                      
                    }
                    else{
                      alert("Reservation Failed! Check the data entered")
                    }
                  })
        }
        else{
            fetch('http://localhost:2500/reserveOnePeriodTemp', {
                method:'post',
                headers: {'Content-Type':'application/json',
                'Accept': 'application/json'
                },
                body: JSON.stringify({
                    secnumber:secnumber,
                    day:day,
                    period:period,
                    subject:subject,
                    email:email
                })
                })
                .then(response => response.json())
                .then(status=>{
                    if(status.status==="Success"){
                      alert("Successfully Reserved")
            
                      
                    }
                    else{
                      alert("Reservation Failed! Check the data entered")
                    }
                  })

        }

    }
    render() {
        const { onRouteChange } = this.props;
        
        
        return (

            <div>
                <h2 class="f6 f2-m f2-l fw6 black-90 mv3 b center" style={{marginTop:"2%",marginLeft:"2%"}}>
                    You can reserve room for a particular period in this window:      
                </h2>

                <article class="mw5 center bg-white br3   mv3 ba b--black-10" style={{marginTop:"5%"}}>
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
                        <div class="flex items-center mb2">
                            <input class="mr2" type="checkbox" id="reserveperm" />
                            <label htmlFor="reserveperm" class="lh-copy f6 b">Reserve Permanently</label>
                        </div>
                    </form>

                    <input
                        
                        className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-red b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit"
                        value="Reserve room"
                        onClick={this.onClickReserve}
                        style={{marginLeft:"25%", marginBottom:"10%",marginTop:"-10%"}}

                    />
                    
                </article>



            </div>



        );

    }






}

export default ReserveParticular;