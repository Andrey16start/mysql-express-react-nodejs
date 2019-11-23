import { Component } from 'react';
import { connect } from "react-redux";

import { SOCKET_ROOT } from '../socket-config';


class Socket extends Component {
  state = {
    ws: new WebSocket(SOCKET_ROOT)
  }

  componentDidMount() {
    if (localStorage.connectToken) {
      this.setupSocket();
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    const webSocket = this.state.ws;
    webSocket.close();
  }

  setupSocket = () => {
    const webSocket = this.state.ws;

    webSocket.onopen = () => {
      console.log('WebSocket connected!)');
    }

    webSocket.onclose = () => {
      console.log('WebSocket disconnected!(');
    }

    webSocket.onerror = (err) => {
      console.log('WebSocket error: ', err);
    }

    webSocket.onmessage = (e) => {
      const { data, type } = JSON.parse(e.data);

      console.log('WebSocket event happen!:', 'type:', type, ', data:', data);

      switch (type) {
        case 'ping': {
          webSocket.send(JSON.stringify({ type: 'pong', data: 'pong' }));
          break;
        }
        default:
          break;
      }
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Socket);