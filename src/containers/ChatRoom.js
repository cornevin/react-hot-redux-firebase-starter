import { connect } from 'react-redux';
import MessageList from '../components/chat/MessageList';
import { connectToChannel } from '../actions/messageActions';


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    messages: state.messages
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    connectChanel: () => {
      dispatch(connectToChannel())
    }
  }
}

const ChatRoom = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);


export default ChatRoom;
