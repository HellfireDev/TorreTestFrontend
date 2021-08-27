import Particles from "react-particles-js";
import { particlesOptions } from '../config/particlesOptions';
import { Redirect, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Register } from "../pages/Register/Register";
import { Signin } from "../pages/Signin/Signin";
import { PrivateRoute } from "./PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
            <Particles className='particles' params={particlesOptions} />
            <Router>
                <>
                    <Switch>
                        <PublicRoute
                            exact path='/register'
                            component={Register}
                            isAuthenticated={user.logged}
                        />
                        <PublicRoute
                            exact path='/signin'
                            component={Signin}
                            isAuthenticated={user.logged}
                        />
                        <PrivateRoute
                            exact path='/home'
                            component={Home}
                            isAuthenticated={user.logged}
                        />
                        {/* <Route exact path='/job/:jobId' component={JobDetails} />
                    <Route exact path='/user/:userId' component={UserDetails} /> */}

                        <Redirect to='/signin' />
                    </Switch>
                </>
            </Router>
        </>
    );

}