import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux";

function UserContainer({ fetchUsers, userData }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const listUsers =
    userData &&
    userData.users &&
    userData.users.map((user, index) => (
      <p key={index}>
        {user.name.first} {user.name.last}
      </p>
    ));

  return userData.loading ? (
    <h1>Loading...</h1>
  ) : userData.error ? (
    <h1>{userData.error}</h1>
  ) : (
    <div>
      <h1>Random Users</h1>
      {listUsers}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
