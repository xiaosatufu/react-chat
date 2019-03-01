import React, { Component } from "react";
import { connect } from "react-redux";
import { Result, List, WhiteSpace, Modal } from "antd-mobile";
import browserCookie from "browser-cookies";
import {logoutSubmit} from "../../redux/user.redux"
import {Redirect} from "react-router-dom"

// alert('Delete', 'Are you sure???', [
//       { text: 'Cancel', onPress: () => console.log('cancel') },
//       { text: 'Ok', onPress: () => console.log('ok') },
//     ])
class User extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    const alter = Modal.alert;
    alter("注销", "确认退出???", [
      {
        text: "取消",
        onPress: () => console.log("cancel")
      },
      {
        text: "确认",
        onPress: () => {
          browserCookie.erase("userid");
          this.props.logoutSubmit()
        }
      }
    ]);
  }
  render() {
    // console.log(this.props.user.avatar+'.png');
    const props = this.props.user;
    const Item = List.Item;
    const Brief = Item.Brief;
    console.log(this.props.redirectTo)
    return props.avatar ? (
      
      <div>
         {/* {props.redirectTo?<Redirect to={props.redirectTo} ></Redirect>:null}  */}
        <Result
          img={
            <img src={require(`../../component/imgs/${props.avatar}.png`)} />
          }
          title={props.user}
          message={props.type === "boss" ? props.company : null}
        />
        <List renderHeader={() => "简介"}>
          <Item multipleLine>
            {props.title}
            {props.desc.split("\n").map(v => (
              <Brief key={v}> {v} </Brief>
            ))}
            {props.money ? <Brief> 薪资 : {props.money} </Brief> : null}
          </Item>
        </List>
        <WhiteSpace> </WhiteSpace>
        <List>
          <Item onClick={this.logout}> 退出登录 </Item>
        </List>
      </div>
    ) : <Redirect to={props.redirectTo} ></Redirect>;
  }
}

const mapStateProps = state => ({
  user: state.user,
  redirectTo:state.user.redirectTo
});


const mapDispatchProps  = dispatch =>({
  logoutSubmit(){
    dispatch(logoutSubmit())
  }
})

export default connect(
  mapStateProps,
  mapDispatchProps
)(User);
