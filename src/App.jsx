import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
const uuidv4 = require('uuid/v4');
const moment = require('moment');

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://10.110.110.35:3001');
    this.state = {
      currentUser: "Anonymous",
      messages: [],
      onlineUsers: 0,
      userColor: "",
    };
  }


nameChange = (name) => {
  let userName = { userName: name, content: `${this.state.currentUser} has changed name to ${name}`, type: "postNotification" }
  this.setState({ currentUser: name})
  this.socket.send(JSON.stringify(userName))
}

 sendMessage = (message) => {
  let newMessage= {username: this.state.currentUser, userColor: this.state.userColor, content: message, type: "postMessage", date: moment(Date.now()).calendar() };
  const messages = [...this.state.messages, newMessage]
  this.socket.send(JSON.stringify(newMessage))
}



componentDidMount() {
  this.socket.onmessage = (message) => {
    let incomingMessage = JSON.parse(message.data);
    console.log(incomingMessage);

    switch(incomingMessage.type) {
        case "incomingMessage":
        this.setState({messages: [ ...this.state.messages, incomingMessage ]}, () => console.log(this.state))
        break;
        case "incomingNotification":
        this.setState({messages: [ ...this.state.messages, incomingMessage ]})
        break;
        case "incomingOnlineUserInfo":
        this.setState({onlineUsers: incomingMessage.activeUsers})
        break;
        case "updatedNumberOfUsers":
        this.setState({onlineUsers: incomingMessage.activeUsers})
        break;
        case "incomingColor":
        this.setState({userColor: incomingMessage.userColor})
        break;
      default:
      throw new Error("Unknown event type " + incomingMessage.type)
    }
  }
};

  render() {
    const { currentUser, messages } = this.state;
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <p className="users-online">{this.state.onlineUsers} users online</p>
        </nav>
        <MessageList messages={ messages }/>
        <ChatBar nameChange={this.nameChange} sendMessage={ this.sendMessage } currentUser={ currentUser }/>
      </div>
    );
  }
}
export default App;
