import React from 'react';
import './Register.css';
import pic1 from './undraw.png';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      confpassword:'',
      phone:''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onConfirmPasswordChange = (event) => {
    this.setState({confpassword: event.target.value})
  }

  onPhoneChange = (event) => {
    this.setState({phone: event.target.value})
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

  onSubmitSignIn = () => {
    
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

  onClickRegister=() =>{
    var name_check = /^[A-Za-z ]+$/;
    var numbers_check = /^[0-9]+$/;
    var mail_check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    var name= document.getElementById("name").value;
    var email=document.getElementById("email-address").value;
    var password=document.getElementById("password").value;
    var confpassword=document.getElementById("confpassword").value;
    var phoneNumber=document.getElementById("phone").value;

    if (!(password.valueOf()===confpassword.valueOf())){
      console.log(password);
      return alert("Password mismatch")
    }

    if(!(name.trim().match(name_check) && phoneNumber.match(numbers_check) && email.trim().match(mail_check))){
        return alert("Invalid entries")
    }

    fetch('http://localhost:2500/register', {
      method:'post',
      headers: {'Content-Type':'application/json',
      'Accept': 'application/json'
    },
      body: JSON.stringify({
        name:name,
        email:email,
        password:password,
        phoneNumber:phoneNumber
      })
    })
      .then(response => response.json())
      .then(user=>{
        if(user.email){
          alert("Hello! "+user.name)
        }
        else{
          alert("Invalid Credentials")
        }
      })
    
    
  


  }

  render() {
    return (
      <article1>
        <div class="mw9 center ph3-ns">
        <div class="cf ph2-ns">
          <div class="fl w-100 w-50-ns pa2">
          <article className="br3 ba b--black-10 mv4 w-50-m w-60-l mw6 shadow-5 ma10 left " style={{marginTop:"10%" , marginLeft:"20%",marginRight:"0%"}}>
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">College E-mail ID</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="confpassword">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  
                  id="confpassword"
                  onChange={this.onConfirmPasswordChange}
                />
              </div>

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
              

            </fieldset>
            <div className="">
              <input
                onClick={this.onClickRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>

        

      </article>
          </div>
          <div class="fl w-100 w-40-ns pa2" >
          <img style={{paddingTop: '5px', marginTop:"40%"}} alt='pic1' src={pic1}/>

          </div>
        </div>
      </div>
              
      


</article1>  
      
    );
  }
}

export default Register;