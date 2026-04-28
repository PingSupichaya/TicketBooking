import Login from "./pages/Login/Login";
import './index.css';

export default function App() {
  return(
    <>
    {/* <Login /> */}
    <Login loginText="SIGN IN" isAdmin={false}/>
    </>
  );
}