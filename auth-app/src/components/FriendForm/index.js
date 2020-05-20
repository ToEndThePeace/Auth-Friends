import React from "react";
import { connect } from "react-redux";
import { friends } from "../../store/actions";

const FriendForm = (props) => {
  const { newFriend, handleInput, postFriend } = props;

  const submitHandler = e => {
    e.preventDefault();
    postFriend(newFriend);
  }

  return (
    <form className="FriendForm" onSubmit={submitHandler}>
      <h2>New Friend</h2>
      <input
        type="text"
        name="name"
        placeholder="Name..."
        value={newFriend.name}
        onChange={handleInput}
      />
      <input
        type="text"
        name="age"
        placeholder="Age..."
        value={newFriend.age}
        onChange={handleInput}
      />
      <input
        type="text"
        name="email"
        placeholder="Email..."
        value={newFriend.email}
        onChange={handleInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

const mapStateToProps = (state) => {
  const { newFriend } = state.friends;
  return { newFriend };
};

export default connect(mapStateToProps, {
  handleInput: friends.handleInput,
  postFriend: friends.postFriend,
})(FriendForm);
