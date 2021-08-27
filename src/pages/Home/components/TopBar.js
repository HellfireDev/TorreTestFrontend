import './TopBar.css';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
import { useContext } from 'react';


export const TopBar = () => {

    const { dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({ type: types.logout });
    }

    return (
        <nav
            className='topbar f3 pr4 flex justify-between shadow-2 fw8 white-40 items-center br2'>
            <img src='./assets/Logo.png' alt='logo' style={{ width: "3rem", height: "3rem" }} className='app-logo pa3' />
            <div className='mr-auto'>
                <p className='f4 light-green'>Hero's Journey</p>
                <p className='white-60 f7'>Powered by torre</p>
            </div>
            <p
                className="f7 link dim black white pointer"
                onClick={handleLogout}
            >Log out</p>
        </nav>
    );

}