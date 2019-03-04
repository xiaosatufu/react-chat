import React, { Component } from "react";
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";
import { Switch, Route } from "react-router-dom";
import NavLinkBar from "../../component/navlink/navlink";
import Boss from "../../container/boss/boss";
import Genius from "../../container/genius/genius";
import User from "../../container/user/user";
import Msg from "../../component/msg/msg"
import { getMsgList, recvMsg } from "../../redux/chat.redux";
// function Genius() {
//   return <h1>ccc</h1>;
// }
// function Msg() {
//   return <h1>ccc</h1>;
// }

@connect(
  state => state,
  { getMsgList, recvMsg }
)
class DashBoard extends Component {
  componentDidMount() {
    if (!this.props.chat.chatmsg.length) {
      this.props.getMsgList();
      this.props.recvMsg();
    }
  }
  render() {
    const { pathname } = this.props.location;
    const user = this.props.user;
    // console.log(this.props);
    const navList = [
      {
        path: "/boss",
        text: "牛人",
        icon: "boss",
        title: "牛人列表",
        component: Boss,
        hide: user.type === "genius"
      },
      {
        path: "/genius",
        text: "boss",
        icon: "job",
        title: "boss列表",
        component: Genius,
        hide: user.type === "boss"
      },
      {
        path: "/msg",
        text: "消息",
        icon: "msg",
        title: "消息列表",
        component: Msg
      },
      {
        path: "/me",
        text: "我",
        icon: "user",
        title: "个人中心",
        component: User
      }
    ];

    // console.log(navList)

    return (
      <div>
        <NavBar mode="dark" className="fixd-header">
          {navList.find(v => v.path == pathname).title}
        </NavBar>
        <div style={{ marginTop: 45 }} />
        <Switch>
          {navList.map(v => (
            <Route key={v.path} path={v.path} component={v.component} />
          ))}
        </Switch>
        <NavLinkBar data={navList} />
      </div>
    );
  }
}

// const mapStateProps = state => ({
//   user: state.user
// });

export default connect(
  null,
  null
)(DashBoard);
