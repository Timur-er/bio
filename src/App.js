import {useDispatch} from "react-redux";
import {useAuth} from "./Hooks/auth.hook";
import {useEffect} from "react";
import AppRoutes from "./routes/AppRoutes";
import {authFunctionsAction} from "./store/auth/actions";

function App() {

  const dispatch = useDispatch();
  const {login, logout} = useAuth();

  useEffect(() => {
      dispatch(authFunctionsAction(login, logout))
  }, [])

  return (
      <>
        <AppRoutes />
      </>
  );
}

export default App;
