import React, { Component } from "react";
import { List } from "antd-mobile";
import { connect } from "react-redux";
import { Badge } from "antd-mobile";

@connect(state => state)
class Msg extends Component {
  getLast(arr) {
    return arr[arr.length - 1];
  }
  render() {
    // if (!this.props.chat.chatmsg.length) {
    //     return
    // }
    const Item = List.Item;
    const Brief = Item.Brief;
    const userid = this.props.user._id;
    const userinfo = this.props.chat.users;
    const msgGroup = {};
    this.props.chat.chatmsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || [];
      msgGroup[v.chatid].push(v);
    });

    const chatList = Object.values(msgGroup).sort((a, b) => {
      const a_last = this.getLast(a).createTime;
      const b_last = this.getLast(b).createTime;
      return b_last - a_last;
    });
    // console.log(chatList);

    return (
      <div>
        <List>
          {chatList.length
            ? chatList.map(v => {
                const lastItem = this.getLast(v);
                const targetId = v[0].from == userid ? v[0].to : v[0].from;
                const unreadnum = v.filter(v => !v.read && v.to == userid)
                  .length;
                const name = userinfo[targetId] ? userinfo[targetId].name : "";
                const avatar = userinfo[targetId]
                  ? userinfo[targetId].avatar
                  : "";
                return (
                  <Item
                    extra={<Badge text={unreadnum} />}
                    thumb={require(`../../component/imgs/${avatar}.png`)}
                    arrow={"horizontal"}
                    key={lastItem._id}
                    onClick={()=>{
                        this.props.history.push(`/chat/${targetId}`)
                    }}
                  >
                    {lastItem.content}
                    <Brief>{name}</Brief>
                  </Item>
                );
              })
            : null}
        </List>
      </div>
    );
  }
}

export default Msg;
