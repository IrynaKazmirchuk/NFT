import Form from "./components/Form";
import Background from "./components/Background";
import Copyright from "./components/Copyright";
import Logo from "./components/Logo";



export default function App() {
  return (
    <div className="sign-in">
      <div className="sign-in__info">
        <Logo/>
        <Form/>
        <Copyright/>
      </div>
      <div className="sign-in__bg">
        <Background/>
      </div>
    </div>
  );
}
