import React, { Component } from "react";
import { NavBar, InputItem,TextareaItem,Button,WhiteSpace } from "antd-mobile";
import AvatarSelector from "../../component/avatar-selector/avatar-selector";
import {update} from '../../redux/user.redux'

import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
class GeniusInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc:""
    };
  }
  onChange(key, value) {
    this.setState({
      [key]: value
    });
  }
  render() {
    const path = this.props.location.pathname
    const redirectTo = this.props.redirectTo
    return (
      <div>
        {redirectTo&&redirectTo!==path?<Redirect to={this.props.redirectTo} ></Redirect>:null}
        <NavBar mode="dark">牛人完善信息页面</NavBar>
        <AvatarSelector selectAvatar={(imgname)=>{
            this.setState({
                avatar:imgname
            })
        }} />
        <InputItem onChange={v => this.onChange("title", v)}>
          求职岗位
        </InputItem>
        <TextareaItem onChange={v => this.onChange("desc", v)}
        rows={3}
        title="个人简介"
        ></TextareaItem>
        <WhiteSpace></WhiteSpace>
        <Button type="primary" onClick={()=>this.props.update(this.state)}>保存</Button>
      </div>
    );
  }
}


const mapStateProps = state =>({
  redirectTo:state.user.redirectTo
})
const mapDispatchProps = dispatch =>({
  update(data){
    dispatch(update(data))
  }
})

export default connect(mapStateProps,mapDispatchProps)(GeniusInfo);
