import React, { Component } from "react";
import {
  List,
  WingBlank,
  WhiteSpace,
  Radio,
  Button,
  InputItem
} from "antd-mobile";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import { register } from "../../redux/user.redux";
import Logo from "../../component/logo/Logo";
import chatForm from "../../component/form/form"
@chatForm
class Register extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   type: "genius",
    //   user: "",
    //   pwd: "",
    //   repwd: ""
    // };
    this.handleRegister = this.handleRegister.bind(this);
  }
  componentDidMount(){
    this.props.handleChange('type','genius')
  }
  // handleChange(key, val) {
  //   this.setState({
  //     [key]: val
  //   });
  // }
  handleRegister() {
    console.log(this.state);
    this.props.register(this.props.state);
  }
  render() {
    const RadioItem = Radio.RadioItem;
    // console.log(this.props)
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo} ></Redirect>:null}
        <Logo />
        {this.props.msg ? <p>{this.props.msg}</p> : null}
        <WingBlank>
          <List>
            <InputItem onChange={v => this.props.handleChange("user", v)}>
              用户
            </InputItem>
            <InputItem
              type="password"
              onChange={v => this.props.handleChange("pwd", v)}
            >
              密码
            </InputItem>
            <InputItem
              type="password"
              onChange={v => this.props.handleChange("repwd", v)}
            >
              确认密码
            </InputItem>
            <RadioItem
              onChange={() => this.props.handleChange("type", "genius")}
              checked={this.props.state.type === "genius"}
            >
              牛人
            </RadioItem>
            <RadioItem
              onChange={() => this.props.handleChange("type", "boss")}
              checked={this.props.state.type === "boss"}
            >
              Boss
            </RadioItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleRegister} type="primary">
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}

// const mapStateProps = state = ({
//   register:state.register
// })

const mapStateProps = state => {
  console.log(state.user);
  return {
    msg: state.user.msg,
    redirectTo:state.user.redirectTo
  };
};
const mapDispatchProps = dispatch => ({
  register(state) {
    dispatch(register(state));
  }
});

export default connect(
  mapStateProps,
  mapDispatchProps
)(Register);
