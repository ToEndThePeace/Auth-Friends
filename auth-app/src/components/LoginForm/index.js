import React from "react";
import { connect } from "react-redux";

import { login } from "../../store/actions";

const LoginForm = (props) => {
  const { credentials, isLoading, handleInput, login } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    login(credentials);
    props.history.push("/friends");
  };

  return (
    <form className="LoginForm" onSubmit={submitHandler}>
      <h2>Login:</h2>
      <input
        type="text"
        name="username"
        placeholder="Enter username..."
        value={credentials.username}
        onChange={handleInput}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password..."
        value={credentials.password}
        onChange={handleInput}
      />
      <input type="submit" value="Submit" disabled={isLoading} />
      {isLoading && <div className="loading">Loading...</div>}
    </form>
  );
};

const mapStateToProps = (state) => {
  const { credentials, isLoading } = state.login;
  return { credentials, isLoading };
};

export default connect(mapStateToProps, {
  handleInput: login.handleInput,
  login: login.login,
})(LoginForm);
