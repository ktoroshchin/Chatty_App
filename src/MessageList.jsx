import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    let userMessage = messages.map((message) => {
      if(message.type === "incomingMessage") {
        return <Message key={message.id} date={message.date} userColor={message.userColor}
        userName={message.username} content={message.content} />
    } else {
        return <div className="message system" key={message.id}>{message.content}</div>
      }
    })

    return (
      <main className="messages">
        {userMessage}
        <div className="message system">
        </div>
      </main>
    )
  }
}

export default MessageList;
