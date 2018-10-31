import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    let userMessage = messages.map((message) => <Message key={message.key} date={message.date} userName={message.username} content={message.content} />
    )
    return (
      <main className="messages">
        {userMessage}
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
      </main>
    )
  }
}

export default MessageList;
