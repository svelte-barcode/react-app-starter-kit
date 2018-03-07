import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/user';

class UserListContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;

    const listUsers = users.map((user) =>
                        <li>{user.first_name}</li>
                      );

    return (
      <div>
        {listUsers}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.all,
  };
}

export default connect(mapStateToProps, { fetchUsers })(UserListContainer);