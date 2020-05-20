import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { connect } from "react-redux";
import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";

function App(props) {
  const { login } = props;
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/friends" component={FriendsList} />
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={LoginForm} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { login } = state;
  return { login };
};

export default connect(mapStateToProps, {})(App);
