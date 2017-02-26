import React from 'react';
import ChatRoom from '../../containers/ChatRoom';
import MessageInput from '../../containers/MessageInput';


const ChatPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h1><span className="glyphicon glyphicon-comment"></span> Chat</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <ol className="breadcrumb">
            <li><a href="/">React Chat App</a></li>
            <li className="active">Chat</li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <span className="glyphicon glyphicon-comment"></span> Messages
            </div>
            <div className="panel-body">
              <ChatRoom/>
            </div>
            <div className="panel-footer">
              <MessageInput/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
