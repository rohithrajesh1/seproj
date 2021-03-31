import React from 'react';
class Signin extends React.Component {
    onSubmitSignIn =()=>{
        fetch('http://localhost:2500/login',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: document.getElementById("email-address").value,
                password: document.getElementById("password").value
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.email){
                alert("Hello! "+user.name);

                console.log(user);
                //this.props.loadUser(user);
            }
            else{
                alert("Invalid credentials")
            }
        })

    }
    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center ">
            <main className=" pa4 black-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                    />
                </div>
                </fieldset>
                <div className="">
                <input
                    onClick={this.onSubmitSignIn}
                    className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Sign in"
                />
                </div>
                {/* <div className="lh-copy mt3">
                <p  onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                </div> */}
            </div>
            </main>
        </article>
        );


    }    
}

export default Signin;