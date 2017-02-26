import React from 'react';
import {Link} from 'react-router';
import ChatRoom from '../../containers/ChatRoom';
import MessageInput from './MessageInput';


const ChatPage = () => {
  return (
    <div>
      <h1>Hi welcome to the chat page</h1>
      <ChatRoom/>
      <MessageInput/>
    </div>
  );
};

export default ChatPage;
