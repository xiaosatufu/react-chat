import React, { Component } from "react";
import {getUserList} from "../../redux/userchat.redux"
import {connect} from "react-redux"
import UserCard from "../../component/usercard/usercard"

class Genius extends Component {
  componentDidMount() {
      this.props.getUserList('boss')
  }
  render() {
    return (
        <UserCard userlist={this.props.userlist}></UserCard>
    );
  }
}

const mapStateProps = state =>({
    userlist:state.chatuser.userlist
})

const mapDispatchProps = dispatch =>({
    getUserList(type){
        dispatch(getUserList(type))
    }
})

export default connect(mapStateProps,mapDispatchProps)(Genius);
