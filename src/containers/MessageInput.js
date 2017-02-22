import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/messageActions';

let MessageInput = ({dispatch, user}) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if(!input.value.trim()) {
          return
        }
        dispatch(sendMessage({
          message: input.value,
          userEmail: user.email,
          userUid: user.uid
        }));
        input.value = ''
      }}>
        <input ref={node => {
          input=node;
        }}/>
        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};


const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  };
};


MessageInput = connect(mapStateToProps, null)(MessageInput);

export default MessageInput;
