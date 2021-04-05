import {
  SET_CONVERSATION_USER,
  REMOVE_CONVERSATION_USER,
} from '../constants';

export const setConverationUser = (user) => ({
  type: SET_CONVERSATION_USER,
  user,
});

export const removeConversationUser = () => ({
  type: REMOVE_CONVERSATION_USER,
});
