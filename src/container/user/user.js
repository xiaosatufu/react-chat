import React, { Component } from "react";
import { connect } from "react-redux";
import { Result, List,WhiteSpace } from "antd-mobile";

class User extends Component {
  render() {
    // console.log(this.props.user.avatar+'.png');
    const props = this.props.user;
    const Item = List.Item;
    const Brief = Item.Brief;
    return props.avatar ? (
      <div>
        <Result
          img={
            <img src={require(`../../component/imgs/${props.avatar}.png`)} />
          }
          title={props.user}
          message={props.type === "boss" ? props.company : null}
        />
        <List renderHeader={() => "简介"}>
          <Item
            multipleLine
          >
            {props.title}
            {props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
            {props.money?<Brief >薪资:{props.money}</Brief>:null}
            
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
            <Item>退出登录</Item>
        </List>
      </div>
    ) : null;
  }
}

const mapStateProps = state => ({
  user: state.user
});

export default connect(
  mapStateProps,
  null
)(User);
