
import React, {Component} from 'react';

class ChatBar extends Component {

  inputAreaMessage(event) {
    const textArea = event.target;

    if(event.charCode == 13 && textArea.value !==""){
      const newMessage = textArea.value
      this.props.sendMessage(newMessage)
      textArea.value = "";
    }
  }

  render() {
    const  { sendMessage, currentUser, messages } = this.props;
    // const inputAreaName = event => {
    //   const textArea = event.target
    // }



    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={currentUser.name} placeholder="Your Name (Optional)" />
        <input className="chatbar-message"  onKeyPress={this.inputAreaMessage.bind(this)} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default ChatBar;
