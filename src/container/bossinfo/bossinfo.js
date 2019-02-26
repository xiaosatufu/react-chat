import React, { Component } from "react";
import { NavBar, InputItem,TextareaItem } from "antd-mobile";
import AvatarSelector from "../../component/avatar-selector/avatar-selector";
class BossInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  onChange(key, value) {
    this.setState({
      [key]: value
    });
  }
  render() {
    return (
      <div>
        <NavBar mode="dark">boss完善信息页面</NavBar>
        <AvatarSelector selectAvatar={(imgname)=>{
            this.setState({
                avatar:imgname
            })
        }} />
        <InputItem onChange={v => this.onChange("title", v)}>
          招聘职位
        </InputItem>
        <InputItem onChange={v => this.onChange("company", v)}>
          公司名称
        </InputItem>
        <InputItem onChange={v => this.onChange("money", v)}>
          职位薪资
        </InputItem>
        <TextareaItem onChange={v => this.onChange("desc", v)}
        rows={3}
        title="职位要求"
        ></TextareaItem>
      </div>
    );
  }
}

export default BossInfo;
