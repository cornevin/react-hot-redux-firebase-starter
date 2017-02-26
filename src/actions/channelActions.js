import * as firebase from 'firebase/firebase-browser';

export function channelCreatError() {
  return {
    type: 'ERROR_CHANEL_CREATE'
  }
}


export function channelCreated() {
  return {
    type: 'CHANEL_CREATED',
  };
}

export function channelRequestSent() {
  return {
    type: 'CHANEL_REQUEST_SENT'
  };
}

export function createChannel(channelName) {
  return (dispatch, getState) => {
    dispatch(channelRequestSent());
    let channelRef = firebase.database().ref("channels");
    channelRef.push(channelName, (error) => {
      if (error) {
        console.log(error);
        dispatch(channelCreatError());
      } else {
        console.log("ok");
        dispatch(channelCreated());
      }
    });
  }
}
