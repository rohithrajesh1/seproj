import React from 'react';
import './Register.css'
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
    document.getElementById('textInput').className="show";
    document.getElementById('verify').className="show";
  }
  onSubmitSignIn = () => {
    
  }

  render() {
    return (
      <article1>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 ma10 left " style={{marginTop:"10%" , marginLeft:"20%"}}>
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
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
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
                    <input className="hide" type="text" id="textInput"  placeholder="Enter OTP here" />
                    </div>
                    <div class="fl w-25 pa1">
                    <input
                id="verify"    
                onClick={this.onSubmitSignIn}
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
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>

        

      </article>
</article1>  
      
    );
  }
}

export default Register;