import * as firebase from 'firebase/firebase-browser';
import * as type from './actionTypes';
import FirebaseAPI from  '../api/firebase';

export function messageSent() {
  return {
    type: type.MESSAGE_SENT
  };
}

export function messageCorrectlySent() {
  return {
    type: type.MESSAGE_CORRECTLY_SENT
  }
}

export function connectedToChannel() {
  return {
    type: type.CONNECT_CHANNEL
  };
}

export function messageReceived(messages) {
  return {
    type: type.MESSAGE_RECEIVED,
    messages
  };
}

export function sendMessage(message) {
  return (dispatch, getState) => {
    dispatch(messageSent());
    let messageRef = firebase.database().ref("message");
    messageRef.push(message, (error) => {
      if (error) {
      } else {
        dispatch(messageCorrectlySent());
      }
    });
  }
}

export function connectToChannel() {
  return (dispatch, getState) => {
    dispatch(connectedToChannel());

    FirebaseAPI.getMessagesUpdate("message", function(data) {
      dispatch(messageReceived(data.val()));
    });

    FirebaseAPI.getLastMessage("message", 10, function(data) {
      dispatch(messageReceived(data.val()));
    });
  }
}
