import React from "react";
import { connect } from "react-redux";

function App(props) {
  const { login } = props;
  return (
    <div className="App">
      <div>{login.helloWorld}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { login } = state;
  return { login };
};

export default connect(mapStateToProps, {})(App);
