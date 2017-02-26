import { connect } from 'react-redux';
import ChannelList from '../components/chat/ChannelList';
import { connectToChannel } from '../actions/messageActions';


const mapStateToProps = (state) => {
  let channels = {};
  if(state.user.channels) {
    channels = state.user.channels
  }
  return {
    auth: state.auth,
    channels: channels
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getUserChanel: () => {
      dispatch(connectToChannel())
    }
  }
}

const ChatChannels = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);



export default ChatChannels;
