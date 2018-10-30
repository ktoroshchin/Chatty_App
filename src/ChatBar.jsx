
import React, {Component} from 'react';

class ChatBar extends Component {

  render() {
    const  { sendMessage, currentUser, messages } = this.props;
    const inputAreaMessage = event => {
      const textArea = event.target;
      if(event.charCode == 13){
        const newMessage = textArea.value
        sendMessage(newMessage)
        textArea.value = "";
      }
    }



    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={currentUser.name} placeholder="Your Name (Optional)" />
        <input className="chatbar-message" type="text" onKeyPress={inputAreaMessage} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default ChatBar;
