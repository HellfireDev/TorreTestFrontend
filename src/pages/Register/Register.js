import { useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useFetchAuth } from "../../hooks/useFetchAuth";
import { apiEndpoints } from '../../config/apiEndpoints';
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";


export const Register = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    const [submittedValues, setSubmittedValues] = useState(null);
    const [formValues, handleInputChange] = useForm();
    const { data: user, loading, error } = useFetchAuth(submittedValues, apiEndpoints.register);

    const handleFormSubmit = () => {
        const { name, torreid, password } = formValues;
        if (name?.trim().length > 2 && torreid?.trim().length > 2 && password?.trim().length > 5) {
            setSubmittedValues(formValues);
        } else {
            toast.error(
                <span>
                    <b>Please enter valid credentials</b>
                    <p>Name {'>'} 2 & Torre Id {'>'} 2 & Password {'>'} 5 characters.</p>
                </span>
            );
        }
    }

    useEffect(() => {
        if (user?.id) {
            dispatch({
                type: types.login,
                payload: {
                    ...user,
                    logged: true
                }
            });
            history.replace('/home');
        } else if (user === '1') {
            toast.error('Torre Id already registered');
        } else if (user === '2') {
            toast.error('Invalid Torre Id');
        } else if (error) {
            toast.error('Registration Error');
        }

    }, [user, loading, error, history, dispatch]);


    return (
        <div className='h1 items-center'>
            <img src='./assets/Logo.png' alt='logo' className="logo pt3 app-logo" style={{ width: '10rem' }} />
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa3 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 white">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="name">Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 white"
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete='off'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="torreid">Torre Id</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 white"
                                    type="text"
                                    name="torreid"
                                    id="torreid"
                                    autoComplete='off'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80 white"
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete='off'
                                    onChange={handleInputChange}
                                />
                            </div>
                        </fieldset>
                        <div>
                            <input className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib w-50 white mb3"
                                type="submit"
                                disabled={loading}
                                value={loading ? "Loading..." : "Register"}
                                onClick={handleFormSubmit}
                            />
                        </div>
                        <Link className="f6 link dim black white pointer lh-copy mt3" to="/signin">
                            Sign In
                        </Link>
                    </div>
                </main>
            </article>
            <Toaster position="bottom-right" />
        </div>
    );

}
