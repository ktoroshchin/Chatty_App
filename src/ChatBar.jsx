
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

  onNameChange(event) {
    const textArea = event.target;

    if(event.charCode == 13 && textArea.value !==""){
      console.log(event.charCode);
      const newName = textArea.value
      console.log(newName);
      this.props.nameChange(newName)
      textArea.value = "";
    }
  }

  render() {
    const  { sendMessage, currentUser, messages } = this.props;

    return (
      <footer className="chatbar">
        <input className="chatbar-username" onKeyPress={this.onNameChange.bind(this)} placeholder="Your Name (Optional)" />
        <input className="chatbar-message"  onKeyPress={this.inputAreaMessage.bind(this)} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default ChatBar;
