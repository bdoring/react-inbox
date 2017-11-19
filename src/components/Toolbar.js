import React from 'react';

// const Toolbar = ({ messages, toolbarSelector }) => {
const Toolbar = ({ messages, handlers }) => {


  let selectButtonClass = "fa-square-o";

  let messagesSelected = messages.filter(message => message.selected);

  if (messagesSelected.length === messages.length) {
    selectButtonClass = "fa-check-square-o";
  } else if (messagesSelected[0]) {
    selectButtonClass = "fa-minus-square-o";
  }

  let unreadMessages = messages.filter(message => !message.read);

  let messageSyntax = (unreadMessages.length === 1) ? "unread message" : "unread messages"

  let disabled = selectButtonClass.includes('fa-square') ? "disabled" : "";


  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{unreadMessages.length}</span>
          {messageSyntax}
        </p>

        <button
          className="btn btn-default" onClick={()=>handlers.toolbarSelector(selectButtonClass)}>
          <i className={`fa ${selectButtonClass}`}></i>
        </button>

        <button
          className="btn btn-default" onClick={() => handlers.toolbarMarkAsReadOrUnread(true)} disabled={`${disabled}`}>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={() => handlers.toolbarMarkAsReadOrUnread(false)} disabled={`${disabled}`}>
          Mark As Unread
        </button>

        <select className="form-control label-select" disabled={`${disabled}`} value="" onChange={(e) => handlers.toolbarAddLabel(e.target.value)}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" disabled={`${disabled}`} value="" onChange={(e) => handlers.toolbarRemoveLabel(e.target.value)}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        {/* <button className="btn btn-default" disabled={`${disabled}`} onClick={() => handlers.toolbarDelete()}> */}
        <button className="btn btn-default" disabled={`${disabled}`} onClick={handlers.toolbarDelete}>
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )

}

export default Toolbar;
