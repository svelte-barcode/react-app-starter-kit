import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../../actions/user';

class Index extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    
    if(users == undefined) {
      console.log("loading");
    } else {
      console.log(users);
    }

    return (
      <div>
        User list
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.all,
  };
}

export default connect(mapStateToProps, { fetchUsers })(Index);

// export default Index;