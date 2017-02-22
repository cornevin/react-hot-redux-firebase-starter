const messages = (state = {}, action) => {
  switch (action.type) {
    case 'MESSAGE_RECEIVED':
      return Object.assign({}, state, action.messages);
    default:
      return state;
  }
};

export default messages;
