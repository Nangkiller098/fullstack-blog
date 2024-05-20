import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth">
      <h1>login</h1>
      <form action="">
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button type="submit">login</button>
        <p>This is an error!</p>
        <span>
          Don't you have account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
