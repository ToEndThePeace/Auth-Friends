import React, { useEffect } from "react";
import { connect } from "react-redux";
import { friends, login } from "../../store/actions";
import FriendForm from "../FriendForm";

const FriendsList = (props) => {
  const { friends, isFetching, fetchFriends, clearStorage } = props;

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <div className="FriendsList">
      <h1>Friends</h1>
      <FriendForm />
      {isFetching ? (
        <div className="fetching">Loading...</div>
      ) : (
        <div className="list">LIST</div>
      )}
      <div>
        {friends.map((friend) => {
          return friend.name + " ";
        })}
      </div>
      <button onClick={clearStorage}>Log Out</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { friends, isFetching } = state.friends;
  return { friends, isFetching };
};

export default connect(mapStateToProps, {
  fetchFriends: friends.fetchFriends,
  clearStorage: login.clearStorage,
})(FriendsList);
