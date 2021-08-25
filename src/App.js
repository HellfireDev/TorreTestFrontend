import { AppRouter } from "./routers/AppRouter";
import './App.css';
import { useReducer } from "react";
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

const init = () => {
  return {
    id: null,
    name: null,
    torreid: null,
    logged: false
  }
}

export const App = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  return (

    <AuthContext.Provider value={{ user, dispatch }} >
      <AppRouter />
    </AuthContext.Provider>
  );

}

