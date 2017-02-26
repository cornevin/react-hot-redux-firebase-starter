import React from 'react';
import {connect} from 'react-redux';
import {createChannel} from '../actions/channelActions';
import TextInput from '../components/chat/TextInput';


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (input, user) => {
      dispatch(createChannel({
        channelName: input.value,
        userUid: user.uid
      }));
    }
  };
};


const mapStateToProps = (state) => {
  return {
    user: state.user,
    placeholder: "Create a channel"
  };
};

const MessageInput = connect(mapStateToProps, mapDispatchToProps)(TextInput);

export default MessageInput;
