const SET_MESSAGES = 'messages/SET_MESSAGES';
const SET_MESSAGE = 'messages/SET_MESSAGE';
const REMOVE_MESSAGE = 'messages/REMOVE_MESSAGE';

const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages,
});

const setMessage = (message) => ({
  type: SET_MESSAGE,
  message,
});

const removeMessage = (messageId) => ({
  type: REMOVE_MESSAGE,
  messageId,
});

export const getMessages = (userId, otherUserId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/messages/${otherUserId}`);
  const messages = await res.json();
  if (!messages.errors) {
    dispatch(setMessages(messages));
  }
  return messages;
};

export const getMessage = (messageId) => async (dispatch) => {
  const res = await fetch(`/api/messages/${messageId}`);
  const message = await res.json();
  if (!message.errors) {
    dispatch(setMessage(message));
  }
  return message;
};

export const receiveMessage = (message) => async (dispatch) => {
  if (message) {
    dispatch(setMessage(message));
  }
};

export const deleteMessage = (messageId) => async (dispatch) => {
  const res = await fetch(`/api/messages/${messageId}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  if (!data.errors) {
    dispatch(removeMessage(messageId));
  }
  return data;
};

const initialState = {
  messages: {},
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return { ...state, messages: { ...action.messages } };
    case SET_MESSAGE:
      return { ...state, messages: { ...state.messages, [action.message.id]: action.message } };
    case REMOVE_MESSAGE:
      return { ...state, messages: { ...state.messages, [action.messageId]: undefined } };
    default:
      return state;
  }
};

export default messagesReducer;
