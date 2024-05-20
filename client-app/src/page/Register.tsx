import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button type="submit">login</button>
        <p>This is an error!</p>
        <span>
          have account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
