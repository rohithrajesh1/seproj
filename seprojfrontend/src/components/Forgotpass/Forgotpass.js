import React from 'react';
class Forgotpass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          otpVerified:false
        }
    }
    
    resetPass=()=>{
        document.getElementById('newPass').className="show";

    }
    onGetotp= (btnPassport) =>{
    

        var numbers_check = /^[0-9]+$/;
        var phonenumber=document.getElementById("phone").value;
    
    
        if(!(phonenumber.match(numbers_check) )){
          return alert("Invalid phone number")
      }
    
      if(phonenumber.length!=10){
        return alert("Invalid phone number")
      }
    
        document.getElementById('chotp').className="show";
        document.getElementById('verify').className="show";
        
    
      
    
        fetch('http://localhost:2500/otp',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  phonenumber:phonenumber
                })
            })
            .then(response => response.json())
            .then(resp => {
              console.log(resp)
                if(resp.status){
                  
                    alert("OTP sent");
    
                    //this.props.loadUser(user);
                }
                else{
                    alert("Invalid credentials")
                }
            })
    
      }
    
    
      onClickVerify=() =>{
        var chotp= document.getElementById("chotp").value;
        var numbers_check = /^[0-9]+$/;
        if(!(chotp.match(numbers_check) )){
          return alert("OTP can only be numbers"+chotp)
        }
        if(chotp.length!=4){
          return alert("Re-enter OTP, OTP is 4 digits")
        }
        
        fetch('http://localhost:2500/verifyotp',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  chotp:chotp
                })
            })
            .then(response => response.json())
            .then(resp => {
              console.log(resp)
                if(resp.status){
                  if(resp.status==="Success"){
                    alert("OTP successfully verified");
                    this.setState.otpVerified=true;

                    this.resetPass();
    
                  }
                  else{
                    alert("OTP mismatch");
                  }
                  
                    
    
                    //this.props.loadUser(user);
                }
                else{
                    alert("Didn't receive OTP try again")
                }
            })
    
        
      }
    render() {
      const { onRouteChange } = this.props;
      return (
          <article className="br3 ba b--black-10 mv4 w-100 mw6 shadow-5 center ">
              <main className=" pa4 black-80">
                  <div className="measure">
                      <div className="center" style={{marginLeft:"20%"}}><h1>  Forgot Password?</h1></div>

                      <b>Type in your phone number below to get new password in to your phone and then regain access to your account:</b>

                      <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Phone number (10 digit number without country code)</label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="tel"
                name="phone"
                id="phone"
                onChange={this.onPhoneChange}
              />
            </div>

            

            <div class="verif">
              <input
                  onClick={this.onGetotp}
                  className="f6 link dim br1 ba ph3 pv2 mb2 dib dark-blue bg-transparent"
                  type="button"
                  value="Get OTP"
              />
              </div>
              
              <div class=" center ">
                  <div class="flex">
                      <div class="fl w-75 pa1">
                      <input className="hide" type="text" id="chotp"  placeholder="Enter OTP here" />
                      </div>
                      <div class="fl w-25 pa1">
                      <input
                          id="verify"    
                          onClick={this.onClickVerify}
                          className="hide b pv2 input-reset ba b--black bg-transparent grow pointer f6 "
                          type="button"
                          value="Verify"
                      />
                      </div>
                  </div>
              </div>
              <div id="newPass" className="hide">
                  <div className="underline"> 
                      <h3>Reset password</h3>
                  </div>

                  <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Enter new password</label>
                      <input
                      className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.onPasswordChange}
                      />
                  </div>
                  <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Confirm new password</label>
                      <input
                      className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.onPasswordChange}
                      />
                  </div>
                  <input
                      onClick={() => onRouteChange('signin')}
                      className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                      type="submit"
                      value="Proceed"
                  />

                  </div>        
      
              </div>

          </main>
      </article>         
      );

    }        
}    

export default Forgotpass;