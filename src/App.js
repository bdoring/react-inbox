import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';

class App extends Component {

  state = {
    messages: [
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }
    ]
  }

  handlers = {

    handleStateUpdate: (messageToBeUpdated, action) => {
      let index;
      let messagesStateCopy = this.state.messages.map((message, i) => {
        if (messageToBeUpdated.id === message.id) {
          index = i;
        }
        return {...message}
      });

      action(messagesStateCopy, index);

      this.setState({ messages: messagesStateCopy})
    },

    toggleSelected: (messagesStateCopy, index) => {

      messagesStateCopy[index].selected = !messagesStateCopy[index].selected;

    },

    toggleStar: (messagesStateCopy, index) => {

      messagesStateCopy[index].starred = !messagesStateCopy[index].starred;
    },

    toolbarSelector: (selectorClass) => {
      let messagesStateCopy = this.state.messages.map((message) => {
        return {...message};
      });

      console.log("messagesStateCopy before if", messagesStateCopy)

      if (selectorClass.includes('check')) {
        messagesStateCopy = messagesStateCopy.map(message => {
          message.selected = false;
          return message;
        });
      } else {
        messagesStateCopy = messagesStateCopy.map(message => {
          message.selected = true
          return message;
        });
      }

      console.log("messagesStateCopy after if", messagesStateCopy)

      this.setState({ messages: messagesStateCopy });

    }
  }

  render() {
    console.log("STATE APP.JS", this.state);
    return (
      <div className="App">
        <Toolbar messages={this.state.messages} toolbarSelector={this.handlers.toolbarSelector}/>
        <MessageList messages={this.state.messages} handlers={this.handlers}/>
      </div>
    );
  }
}

export default App;
