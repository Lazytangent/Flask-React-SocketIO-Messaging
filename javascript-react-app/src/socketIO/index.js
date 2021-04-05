import io from 'socket.io-client';

let socket;

export const initiateSocket = () => {
  socket = io();
  return socket;
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};

export const subscribeToChat = (cb) => {
  if (!socket) return true;

  return socket.on('message', (msg) => cb(null, msg));
};

export const sendMessage = (data) => {
  if (socket) socket.emit('message', data);
};
