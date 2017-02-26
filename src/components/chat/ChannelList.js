import React, {PropTypes, Component} from 'react';

class ChannelList extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getUserChanel();
  }

  render() {

    var that = this;
    return (
      <div>
        <ul>
          coucou
          coucou
          coucou
          {Object.keys(this.props.channels).map(function(key) {
            return <div key={key}>{that.props.channels[key]}</div>;
          })}
        </ul>
      </div>
    );
  }
}


ChannelList.propTypes = {
  auth: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired
};

export default ChannelList;
