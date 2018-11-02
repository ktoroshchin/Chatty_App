import React, {Component} from 'react';

class Message extends Component {
  render() {
      const { userColor, userName, content, date }     = this.props;

    return (
      <div className="message">
        <span className="message-username" style={{color:userColor}}>{userName}</span>
        <span className="message-content">{content}</span>
        <span className="message-content">{date}</span>
      </div>
      );
    }
  }
export default Message;
