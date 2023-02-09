import "./style.css";
import LoginForm from "../../components/login/loginForm";
import Footer from "../../components/login/Footer";
import RegisterForm from "../../components/login/RegisterForm";

export default function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <RegisterForm />
        <Footer />
      </div>
    </div>
  );
}
