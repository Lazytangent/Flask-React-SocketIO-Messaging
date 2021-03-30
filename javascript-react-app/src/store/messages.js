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

export const getMessages = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/messages`);
  const messages = await res.json();
  if (!messages.errors) {
    dispatch(setMessages(messages));
  }
  return messages;
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
