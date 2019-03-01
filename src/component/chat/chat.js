import React, { Component } from "react";
import { List, InputItem } from "antd-mobile";
import io from "socket.io-client";
import { connect } from "react-redux";
import {getMsgList} from '../../redux/chat.redux'
const socket = io("ws://localhost:9093");

@connect(
    state=>state,
    {getMsgList}

)
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      msg: []
    };
  }
  componentDidMount() {
      this.props.getMsgList()
    // socket.on("recvmsg", (data)=> {
    //   console.log(data);
    //   this.setState({
    //       msg:[...this.state.msg,data.text]
    //   })
    // });
  }
  handleSubmit() {
    // socket.emit("sendmsg", { text: this.state.text });
    this.setState({ text: "" });
    // console.log(this.state);
  }
  render() {
    return (
      <div>
        {this.state.msg.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}
        {/* <h2>chat with us111er:{this.props.match.params.user}</h2> */}
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder="请输入"
              value={this.state.text}
              onChange={v => this.setState({ text: v })}
              extra={<span onClick={() => this.handleSubmit()}>发送</span>}
            />
          </List>
        </div>
      </div>
    );
  }
}

export default Chat;
