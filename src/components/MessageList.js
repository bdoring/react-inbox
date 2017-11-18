import React from 'react';
import Message from './Message.js';

// const MessageList = ({ messages, toggleSelected }) => {
  const MessageList = ({ messages, handlers }) => {
  // let message = messages.map((message, index) => <Message key={index} message={message} toggleSelected={toggleSelected}/>);

  let messageList = messages.map((message, index) => <Message key={index} message={message} handlers={handlers}/>);

  return (
    <div>
      {messageList}
    </div>
  )
}

export default MessageList;
