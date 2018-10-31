import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
const uuidv4 = require('uuid/v4');
const moment = require('moment');

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:3001');
    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    };
  }


 sendMessage = (message) => {
  let newMessage= {username: this.state.currentUser.name, content: message, key: uuidv4(), date: moment(Date.now()).calendar() };
  const messages = [...this.state.messages, newMessage]
  this.setState({
    messages: [...this.state.messages, newMessage]
  })
  this.socket.send(JSON.stringify(newMessage))
}



componentDidMount() {
  this.socket.onmessage = (message) => {
    const incomingMessage = JSON.parse(message.data);

    this.setState({messages: [ ...this.state.messages, incomingMessage ]})
  }
};

  render() {
    const { currentUser, messages } = this.state;
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={ messages }/>
        <ChatBar sendMessage={ this.sendMessage } currentUser={ currentUser }/>
      </div>
    );
  }
}
export default App;
