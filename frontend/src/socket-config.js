let socketHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === 'localhost') {
  socketHost = 'ws://localhost:8080';
};

export const SOCKET_ROOT = `${socketHost}`;