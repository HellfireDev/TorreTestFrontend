import { useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { apiEndpoints } from "../../config/apiEndpoints";
import { useFetchPost } from "../../hooks/useFetchPost";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";


export const Signin = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    const [submittedValues, setSubmittedValues] = useState(null);
    const [formValues, handleInputChange] = useForm();
    const { data: user, loading, error } = useFetchPost(submittedValues, apiEndpoints.login);

    const handleFormSubmit = () => {
        const { torreid, password } = formValues;
        if (torreid?.trim().length > 2 && password?.trim().length > 5) {
            setSubmittedValues(formValues);
        } else {
            toast.error(
                <span>
                    <b>Please enter valid credentials</b>
                    <p>Torre Id {'>'} 2 & Password {'>'} 5 characters.</p>
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
            toast.error('Unable to get user');
        } else if (user === '2') {
            toast.error('Wrong credentials!');
        } else if (error) {
            toast.error('Login Error');
        }

    }, [user, loading, error, history, dispatch]);


    return (
        <div className='h1 items-center'>
            <img src='./assets/Logo.png' alt='logo' className="logo pt3" style={{ width: '10rem' }} />
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa3 black-80">
                    <div className="measure">
                        <fieldset id="signin" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
                            <div className="mt3">
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
                                value={loading ? "Loading..." : "Sign In"}
                                onClick={handleFormSubmit}
                            />
                        </div>
                        <Link className="f6 link dim black white pointer lh-copy mt3" to="/register">
                            Register
                        </Link>
                    </div>
                </main>
            </article>
            <Toaster position="bottom-right" />
        </div>
    );

}