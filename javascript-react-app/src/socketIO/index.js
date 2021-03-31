import io from 'socket.io-client';

let socket;

export const initiateSocket = () => {
  socket = io();
  console.log('Connecting socket...');
  console.dir(socket);
  return socket;
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
};

export const subscribeToChat = (cb) => {
  if (!socket) return true;

  return socket.on('message', (msg) => {
    console.log('Websocket event received!');
    return cb(null, msg);
  });
};

export const sendMessage = (message) => {
  if (socket) socket.emit('message', { message });
};
