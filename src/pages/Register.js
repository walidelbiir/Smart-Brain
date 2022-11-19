import React from "react";
import { useState } from "react";
import { Link  } from "react-router-dom";


const Register = ({ NavigateToSignin})=>{

    const [Name , SetName] = useState('');
    const [Email , SetEmail] = useState('');
    const [Password , SetPassword] = useState('');
    
    const onNameChange = (event) =>{
        SetName(event.target.value);
    }
    const onEmailChange = (event) =>{
        SetEmail(event.target.value);
    }
    const onPasswordChange = (event) =>{
        SetPassword(event.target.value);
    }
    const onRegister = (event) =>{
        event.preventDefault();
        fetch('http://localhost:3000/register',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({name : Name, email : Email, password : Password})
        })
        .then(res => res.json())
        .then( data => {
            if (data ) 
            NavigateToSignin();
        }
        )
    }

    return(
<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
        <main className="pa4 black-80">s
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input onChange={onNameChange}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={onEmailChange}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input  onChange={onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        
                </fieldset>
                <div>
                    <input onClick={onRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/> 
                </div>
            <div className="lh-copy mt3">
               <Link to='/'> <p className="f6 link dim black db">Got an account ? Signin !</p> </Link>
            </div>
        </form>
    </main>
</article>
)

}

export default Register;