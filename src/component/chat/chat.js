import React, { Component } from "react";
import { List, InputItem, NavBar, Icon, Grid } from "antd-mobile";
import io from "socket.io-client";
import { connect } from "react-redux";
import { getMsgList, sendMsg, recvMsg,readMsg } from "../../redux/chat.redux";
import { getChatId } from "../../utils";

const socket = io("ws://localhost:9093");

@connect(
  state => state,
  { getMsgList, sendMsg, recvMsg,readMsg }
)
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      msg: [],
      showEmoji: false
    };
  }

  componentDidMount() {
    // console.log(this.props.chat.chatmsg.length)
    if (!this.props.chat.chatmsg.length) {
      this.props.getMsgList();
      this.props.recvMsg();
    }
  }
  fixCarousel() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 10);
  }
  componentWillUnmount(){
    const to = this.props.match.params.user
    this.props.readMsg(to)
  }
  // componentDidMount() {
  //   // socket.on("recvmsg", (data)=> {
  //   //   console.log(data);
  //   //   this.setState({
  //   //       msg:[...this.state.msg,data.text]
  //   //   })
  //   // });
  // }
  handleSubmit() {
    // socket.emit("sendmsg", { text: this.state.text });
    // console.log(this.state);
    const from = this.props.user._id;
    const to = this.props.match.params.user;
    const msg = this.state.text;
    this.props.sendMsg({ from, to, msg });
    this.setState({ text: "" });
  }
  render() {
    const emoji = "😌 😪 😏 🙋 🙅 🙎 😼 😻 🙌 🙆 🙏 😸 😽 😫 🙍 🙇 😺 😹 😿 😾 🙉 👶 👨 👵 🙀 🙊 👦 👩 😄 😃 😀 ☺ ️ 😉 😚 😗 😙 😜 😝 😛 😁 😔 😌 😒 😞 😣 😢 😂 😭 😪 😥 😰 😅 😩 😫 😨 😱 😠 😤 😖 😆 😋 😷 😎 😴 😵 😟 😦 😧 😈 👿 😮 😬 😐 😕 😯 😶 😇 😏 😑 👲 👳 👮 👷 💂 👶 👦 👧 👨 👩 👴 👵 👱 👼 👸 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 👺 🙈 🙉 🙊 💀 👽 👀 👃 👄 👂 ❤ 💔 💘 💝 💜 💛 💚 💙 💩 👍 👎 👊 ✌ 👌 💪 👆 👇 👈 👉 ✊ 👐 🙏 🙌 👏 👧 👦 👩 👨 👶 👵 👴 👳 👳 👳 👲 👸 👸 👷 💂 👮 🙆 🙅 💇 🙅 💇 💆 💁 💁 👯 👫 👫 🎎 🚶 🏃 💃 💑 💏 👼 💀 🐱 🐶 🐭 🐹 🐰 🐺 🐸 🐯 🐨 🐻 🐷 🐮 🐗 🐵 🐙 🐛 🐔 🐧 🐦 🐍 🐴 🐠 🐳 🐬 ☀ ☔ 🌙 ✨ ⭐ ⚡ ☁ ⛄ 🌊 ❗ ❓ 🌻 🌺 🌹 🔥 🎵 💦 💤 🌷 🌸 💐 🍀 🌾 🍃 🍂 🎃 👻 🎅 🌵 🌴 🎍 🍁 🎄 🔔 🎉 🎈 💿 📷 🎥 📬 💡 🔑 🔒 🔓 📺 💻 🛀 💰 🔫 💊 💣 ⚽ 🏈 🏀 🎾 🎿 🏄 🏊 🏆 👾 🎤 🎸 👙 👑 🌂 👜 💄 💅 💍 🎁 💎 ☕ 🎂 🍰 🍺 🍻 🍸 🍵 🍶 🍔 🍟 🍝 🍜 🍧 🍦 🍡 🍙 🍘 🍞 🍛 🍚 🍲 🍱 🍣 🍎 🍓 🍉 🍆 🍅 🍊 🚀 🚄 🚉 🚃 🚗 🚕 🚓 🚒 🚑 🚙 🚲 🏁 🚹 🚺 ⭕ ❌ 😺 😹 😿 😾 🙉 👶 👨 👵 🙀 🙊 👦 👩 💏 🙈 💩 👧 👴 💑 👪 👫 👬 👭 👮 💂 👸 👱 💃 👤 👷 👯 🎅 👲 💆 👥 💁 👰 👼 👳 💇 💅 👺 👿 👀 👣 💋 👻 👽 💀 👂 👄 ❤ 👹 👾 💪 👃 👅 💙 💚 💓 💖 💝 👍 ✊ 💛 💔 💗 💞 👎 ✌ 💜 💕 💘 💟 👌 ✋ 👊 👇 👋 ☝ 👈 👏 👆 👉 👐 🔰 👟 🎩 ⌚ 👖 👙 💄 👑 🎓 👔 👗 👠 👞 👒 👓 👕 👘 👡 👢 💼 👛 💲 💶 💱 👚 🎒 💰 💵 💷 💹 👜 👝 💳 💴 💸 🔫 🔪 💊 🔕 🔭 🔋 📗 💣 🚬 🚪 🔮 🔌 📘 💉 🔔 🔬 🔦"
      .split(" ")
      .filter(v => v)
      .map(v => ({ text: v }));
    const userid = this.props.match.params.user;
    const Item = List.Item;
    const users = this.props.chat.users;
    if (!users[userid]) {
      return null;
    }
    const chatid = getChatId(userid, this.props.user._id);
    const chatmsgs = this.props.chat.chatmsg.filter(v => v.chatid == chatid);
    return (
      <div id="chat-page">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            this.props.history.goBack();
          }}
        >
          {users[userid].name}
        </NavBar>

        {chatmsgs.map(v => {
          const avatar = require(`../../component/imgs/${
            users[v.from].avatar
          }.png`);
          return v.from == userid ? (
            <List key={v._id}>
              <Item thumb={avatar}>{v.content}</Item>
            </List>
          ) : (
            // <p key={v._id}>对方发来的:{v.content}</p>
            <List key={v._id}>
              <Item extra={<img src={avatar} />} className="chat-me">
                {v.content}
              </Item>
            </List>
          );
          // return <p key={v._id}>{v.content}</p>;
        })}
        {/* <h2>chat with us111er:{this.props.match.params.user}</h2> */}
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder="请输入"
              value={this.state.text}
              onChange={v => this.setState({ text: v })}
              extra={
                <div>
                  <span
                    onClick={() => {
                      this.setState({
                        showEmoji: !this.state.showEmoji
                      });
                      this.fixCarousel()
                    }}
                    style={{ marginRight: 15 }}
                  >
                    ^_^
                  </span>
                  <span onClick={() => this.handleSubmit()}>发送</span>
                </div>
              }
            />
          </List>
          {this.state.showEmoji ? (
            <Grid
              columnNum={9}
              carouselMaxRow={4}
              isCarousel={true}
              data={emoji}
              onClick={el=>{
                this.setState({
                  text:this.state.text + el.text
                })
                console.log(el)
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Chat;
