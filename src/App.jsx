import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
                    currentUser: {name: "Bob"},
                    messages: [
                      {
                        username: "Bob",
                        content: "Has anyone seen my marbles?",
                        id: 2000
                      },
                      {
                        username: "Anonymous",
                        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
                        id: 1999
                      }
                    ]
                  }
                  console.log(this.state);
  }
  //
  // // in App.jsx
  // componentDidMount() {
  //   console.log("componentDidMount <App />");
  //   setTimeout(() => {
  //     console.log("Simulating incoming message");
  //     // Add a new message to the list of messages in the data store
  //     const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
  //     const messages = this.state.messages.concat(newMessage)
  //     // Update the state of the app component.
  //     // Calling setState will trigger a call to render() in App and all child components.
  //     this.setState({messages: messages})
  //   }, 3000);
  // }


 sendMessage = (message) => {
  let newMessage= {username: this.state.currentUser.name, content: message, id: this.state.messages.length+1};
  const messages = [...this.state.messages, newMessage]
  this.setState({messages})
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
