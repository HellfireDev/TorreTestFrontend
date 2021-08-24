import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useForm } from "../../hooks/useForm";


export const Register = () => {

    const [values, handleInputChange, reset] = useForm();
    console.log(values)

    return (
        <div className='h1'>
            <img src='./assets/Logo.png' alt='logo' className="logo pt3 w-20" />
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 white">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="name">Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="torreid">Torre Id</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80"
                                    type="text"
                                    name="torreid"
                                    id="torreid"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib w-50 white"
                                type="submit"
                                value="Register"
                            // onClick={this.onRegisterSubmit}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p className="f6 link dim black db white pointer"
                            // onClick={() => this.props.onRouteChange('signIn')}
                            >Sign In</p>
                        </div>
                    </div>
                </main>
            </article>
            <Toaster position="bottom-right" />
        </div>
    );

}


// import toast, { Toaster } from 'react-hot-toast';

// class Register extends Component {
//   

//     toastWrongRegisterCredentials = () => toast.error(
//         <span>
//             <b>Please enter valid credentials</b>
//             <p>Name & Password should have more than 5 characters.</p>
//         </span>
//     );

//     toastRegistrationError = () => toast.error('Registration Error');

//     onRegisterSubmit = () => {
//         const { registerName, registerEmail, registerPassword } = this.state;
//         if (registerName.trim().length > 5 &&
//             registerEmail.trim().includes('@') &&
//             registerEmail.trim().includes('.') &&
//             registerPassword.trim().length>5) {
//             fetch(`${this.props.apiUrl}/register`, {
//                 method: 'post',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     name: registerName,
//                     email: registerEmail,
//                     password: registerPassword
//                 })
//             }).then(response => response.json())
//                 .then(user => {
//                     if (user.id) {
//                         this.props.loadUser(user);
//                         this.props.onRouteChange('home');
//                     } else if (user === 'Unable to register'){
//                         this.toastRegistrationError();
//                     }
//                 }).catch(err => console.log('error registering'));
//         } else {
//             this.toastWrongRegisterCredentials();
//         }
//     }

//     render() {
//         return (
//             <div className='h1'>
//                 <img src={Logo} alt='logo' className="logo pt3 w-20" />
//                 <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
//                     <main className="pa4 black-80">
//                         <div className="measure">
//                             <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//                                 <legend className="f1 fw6 ph0 mh0 white">Register</legend>
//                                 <div className="mt3">
//                                     <label className="db fw6 lh-copy f6 white" htmlFor="name">Name</label>
//                                     <input
//                                         className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80"
//                                         type="text"
//                                         name="name"
//                                         id="name"
//                                         onChange={this.onNameChange}
//                                     />
//                                 </div>
//                                 <div className="mv3">
//                                     <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
//                                     <input
//                                         className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80"
//                                         type="email"
//                                         name="email-address"
//                                         id="email-address"
//                                         onChange={this.onEmailChange}
//                                     />
//                                 </div>
//                                 <div className="mv3">
//                                     <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
//                                     <input
//                                         className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80"
//                                         type="password"
//                                         name="password"
//                                         id="password"
//                                         onChange={this.onPasswordChange}
//                                     />
//                                 </div>
//                             </fieldset>
//                             <div className="">
//                                 <input className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib w-50 white"
//                                     type="submit"
//                                     value="Register"
//                                     onClick={this.onRegisterSubmit}
//                                 />
//                             </div>
//                             <div className="lh-copy mt3">
//                                 <p className="f6 link dim black db white pointer"
//                                     onClick={() => this.props.onRouteChange('signIn')}
//                                 >Sign In</p>
//                             </div>
//                         </div>
//                     </main>
//                 </article>
//                 <Toaster position="bottom-right" />
//             </div>
//         );
//     }
// }

// export default Register;