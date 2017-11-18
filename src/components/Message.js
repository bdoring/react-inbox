import React from 'react';

// const Message = ({ message, toggleSelected }) => {
const Message = ({ message, handlers }) => {
  console.log("HANDLERS:", handlers)

  let readMessage = message.read ? "read" : "unread";

  let selectedMessage = message.selected ? "selected" : "";

  let checked = selectedMessage ? "checked" : "";

  let labels = message.labels.map((label, index) => <span key={index} className="label label-warning">{label}</span>);

  let starred = message.starred ? "-o" : "";

  return (
    <div className={`row message ${readMessage} ${selectedMessage}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" checked={checked} onChange={() => handlers.handleStateUpdate(message, handlers.toggleSelected)} />
          </div>
          <div className="col-xs-2">
            <i className={`star fa fa-star${starred}`} onClick={() => handlers.handleStateUpdate(message, handlers.toggleStar)}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {labels}
        <a href="">
          {message.subject}
        </a>
      </div>
    </div>
  )
}

export default Message;
