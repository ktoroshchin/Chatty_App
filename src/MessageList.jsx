import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    console.log(messages);
    let userMessage = messages.map((message) => {
      return <Message userName={message.username} content={message.content} key={message.id}/>
    })
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
