import React, { Component } from "react";
import { List, InputItem, WingBlank, WhiteSpace, Button } from "antd-mobile";
import {login} from '../../redux/user.redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Logo from "../../component/logo/Logo";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pwd: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.register = this.register.bind(this);
  }
  register() {
    this.props.history.push("/register");
  }
  handleLogin(){
    this.props.login(this.state)
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }

  render() {
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo} ></Redirect>:null}
        <Logo />
        {this.props.msg ? <p>{this.props.msg}</p> : null}
        <WingBlank>
          <List>
            <InputItem onChange={v => this.handleChange("user", v)}>用户</InputItem>
            <InputItem type="password" onChange={v => this.handleChange("pwd", v)}>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleLogin}  type="primary">登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type="primary">
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}

const mapStateProps = state =>({
  msg:state.user.msg,
  redirectTo:state.user.redirectTo
})

const mapDispatchProps = dispatch =>({
  login(state){
    dispatch(login(state))
  }
})

export default connect(mapStateProps,mapDispatchProps)(Login);
