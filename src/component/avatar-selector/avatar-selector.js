import React, { Component } from "react";
import { Grid } from "antd-mobile";

class AvatarSelector extends Component {
  render() {
    const avatarList = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15"
      .split(",")
      .map(v => ({
        icon: require(`../imgs/${v}.png`),
        text: v
      }));
    console.log(avatarList);
    return (
      <div>
        <Grid columnNum={5} data={avatarList} onClick={elm=>{
            this.props.selectAvatar(elm.text)
        }} />
      </div>
    );
  }
}

export default AvatarSelector;
