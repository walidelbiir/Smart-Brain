import React, { useState } from 'react';
import { Link } from 'react-router-dom';





const SignInForm = ({NavigateToProfilePage , setrank  }) => {

    const [signinEmail , setEmail] = useState('');
    const [signinPassword , setPassword] = useState('');

   const onEmailchange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordchange = (event) => {
        setPassword(event.target.value);
    }



    const onSigninsubmit = (event) => {
        event.preventDefault();
       
       fetch('http://localhost:3000/signin',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email:signinEmail, password:signinPassword}),
        })
        .then(res => res.json())
        .then(data =>{
            if(data)
            {   
                sessionStorage.setItem('username',data.name);
                sessionStorage.setItem('id',data.id)
                setrank(data.rank)
                NavigateToProfilePage(data.id);
            }
        })
        
    }

    return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
        <main className="pa4 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={onEmailchange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={onPasswordchange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer">
                            <input type="checkbox"/> 
                                Remember me
                        </label>
                </fieldset>
                <div>
                   <input onClick={onSigninsubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/> 
                </div>
            <div className="lh-copy mt3">
               <Link to='/register'> <p className="f6 link dim black db">Register</p> </Link>
                <a href="#0" className="f6 link dim black db">Forgot your password?</a>
            </div>
        </form>
    </main>
</article>

    )
}


export default SignInForm;