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
        <ul>
          {Object.keys(this.props.messages).map(function(key) {
            return <div key={key}>{that.props.messages[key].message}</div>;
          })}
        </ul>
      </div>
    );
  }
}


MessageList.propTypes = {
  auth: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired
};

export default MessageList;
