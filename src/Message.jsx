
import React, {Component} from 'react';


class Message extends Component {
  render() {
      const { userName, content, date }     = this.props;


    return (
      <div className="message">
        <span className="message-username">{userName}</span>
        <span className="message-content">{content}</span>
        <span className="message-content">{date}</span>
      </div>
      );
    }
  }

  export default Message;
