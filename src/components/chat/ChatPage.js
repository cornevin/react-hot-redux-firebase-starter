import React from 'react';
import {Link} from 'react-router';

const ChatPage = () => {
  return (
    <div>
      <h1>Hi welcome to the chat page</h1>
      <Link to="/" activeClassName="active">Home</Link>
    </div>
  );
};

export default ChatPage;
