import React, {PropTypes, Component} from 'react';

class MessageList extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.connectChanel();
  }

  render() {

    var that = this;
    return (
      <div>
          {Object.keys(this.props.messages).map(function (key) {
            return <Message message={that.props.messages[key]} user={that.props.user}/>
          })}
      </div>
    );
  }
}


let Message = ({message, user}) => {
  if (message.userEmail === user.email) {
    return <div className="row" key={message.key}>
      <div className="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-lg-10 col-md-10 col-sm-10">
        <div className="alert alert-info" >{message.message}</div>
      </div>
      <div className="col-lg-1 col-md-1 col-sm-1">
        <div className="user-circle user-circle-me text-center" >M</div>
      </div>
    </div>;
  } else {
    return <div className="row" key={message.key}>
      <div className="col-lg-1 col-md-1 col-sm-1">
        <div className="user-circle user-circle-u text-center" >U</div>
      </div>
      <div className="col-lg-10 col-md-10 col-sm-10">
        <div className="alert alert-warning" >{message.message}</div>
      </div>
    </div>;
  }
};



MessageList.propTypes = {
  auth: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired
};

export default MessageList;
