import PagesRoute from "./routes/PagesRoute";
import {useDispatch} from "react-redux";
import {useAuth} from "./Hooks/auth.hook";
import {useEffect} from "react";
import {loginAction} from "./store/auth/actions";

function App() {

  const dispatch = useDispatch();
  const {token, userId, login, logout} = useAuth();
  const isAuth = !!token

  useEffect(() => {
      dispatch(loginAction(userId, token, login, logout, isAuth))
  }, [])

  return (
        <PagesRoute />
  );
}

export default App;
