import Particles from "react-particles-js";
import { particlesOptions } from '../config/particlesOptions';
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Register } from "../pages/Register/Register";
import { Signin } from "../pages/Signin/Signin";


export const AppRouter = () => {

    return (
        <Router>
            <>
                <Particles className='particles' params={particlesOptions} />
                <Switch>
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/signin' component={Signin} />
                    <Route exact path='/home' component={Home} />
                    {/* <Route exact path='/job/:jobId' component={JobDetails} />
                    <Route exact path='/user/:userId' component={UserDetails} /> */}

                    <Redirect to='/signin' />
                </Switch>
            </>
        </Router>
    );

}