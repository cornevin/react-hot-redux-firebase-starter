import React from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../actions/messageActions';
import TextInput from '../components/chat/TextInput';


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (input, user) => {
      dispatch(sendMessage({
        message: input.value,
        userEmail: user.email,
        userUid: user.uid
      }));
    }
  };
};


const mapStateToProps = (state) => {
  return {
    user: state.user,
    placeholder: "Enter message ..."
  };
};

const MessageInput = connect(mapStateToProps, mapDispatchToProps)(TextInput);

export default MessageInput;
