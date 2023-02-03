import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div clasName="login">
      <div clasName="login_wrapper">
        <div clasName="login_wrap">
          <div clasName="login_1">
            <img src="../../icons/facebook.svg" alt="" />
            <span>
              Facebook helps you connect and share with the people in your life.
            </span>
          </div>
          <div clasName="login_2">
            <div clasName="login_2_wrap">
              <Formik>
                {(formik) => (
                  <Form>
                    <input type="text" />
                    <input type="text" />
                    <button type="submit">Log In</button>
                  </Form>
                )}
              </Formik>
              <Link to="/forgot">Forgot Password?</Link>
              <div className="sign_splitter"></div>
              <button className="blue_btn open_signup">Create Account</button>
            </div>
            <Link to="/">
              <b>Create a Page </b>
              for a celebrity, brand or business.
            </Link>
          </div>
        </div>
        <div clasName="register"></div>
      </div>
    </div>
  );
}
