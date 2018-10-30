
import React, {Component} from 'react';


class Message extends Component {
  render() {
      const { userName, content }     = this.props;


    return (
      <div className="message">
        <span className="message-username">{userName}</span>
        <span className="message-content">{content}</span>
      </div>
      );
    }
  }

  export default Message;
