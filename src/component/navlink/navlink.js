import React, { Component } from "react";
import PropTypes from "prop-types";
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

@connect(state => state.chat)
class NavLinkBar extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };
  render() {
      
// console.log(this.props.data)
    const navList = this.props.data.filter(v => !v.hide);
    const { pathname } = this.props.location;
    return (
      <TabBar className="user-center">
        {navList.map(v => (
          <TabBar.Item
            badge={v.path == "/msg" ? this.props.unread : ""}
            key={v.path}
            title={v.text}
            selected={pathname === v.path}
            onPress={() => {
              this.props.history.push(v.path);
            }}
          />
        ))}
      </TabBar>
    );
  }
}

export default withRouter(NavLinkBar);
