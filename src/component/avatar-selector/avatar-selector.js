import React, { Component } from "react";
import { Grid ,List} from "antd-mobile";
import PropTypes from 'prop-types'

class AvatarSelector extends Component {
  static propTypes = {
    selectAvatar:PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const avatarList = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15"
      .split(",")
      .map(v => ({
        icon: require(`../imgs/${v}.png`),
        text: v
      }));
    // console.log(avatarList);
    const gridHeader = this.state.text ? (
      <div>
        <span>已选择头像</span>
        <img style={{ width: 20 }} src={this.state.icon} alt="" />
      </div>
    ) : (
      "请选择头像"
    );
    return (
      <div>
        <List renderHeader={() => gridHeader}>
          <Grid
            columnNum={5}
            data={avatarList}
            onClick={elm => {
              this.props.selectAvatar(elm.text);
              this.setState(elm);
            }}
          />
        </List>
      </div>
    );
  }
}

export default AvatarSelector;
