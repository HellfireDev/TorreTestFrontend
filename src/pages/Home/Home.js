import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Home = ({ history }) => {

    const { user: { name, id, torreid, logged }, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({
            type: types.logout,
        });
        history.replace('/signin');
    }

    return (
        <>
            <h1>Home: {name} {id} {torreid} {+logged}</h1>
            <p
                className="f6 link dim black white pointer lh-copy mt3"
                onClick={handleLogout}
            >Logout</p>
        </>
    );

}