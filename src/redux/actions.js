export const ADD_GENERATED_MESSAGE = 'ADD_GENERATED_MESSAGE';
export const DELETE_MESSAGE_FROM_LIST = 'DELETE_MESSAGE_FROM_LIST';
export const DELETE_ALL_MESSAGES = 'DELETE_ALL_MESSAGES';
export const TOGGLE_IS_GENERATING_MESSAGES = 'TOGGLE_IS_GENERATING_MESSAGES';

export const addMessage = (message) => {
  let messagePriority
  switch(message.priority){
    case 1:
      messagePriority = 'error';
      break;
    case 2:
      messagePriority = 'warning';
      break;
    case 3:
      messagePriority = 'info';
      break;
    default:
      messagePriority = 'basic';
      break
  }
  message.priorityLevel = messagePriority;
  return {
    type: ADD_GENERATED_MESSAGE,
    message,
  };
};

export const deleteMessage = (value, priorityLevel) => ({
  type: DELETE_MESSAGE_FROM_LIST,
  value,
  priorityLevel
});

export const deleteAllMessages = () => ({
  type: DELETE_ALL_MESSAGES
});

export const toggleIsGeneratingMessages = () => ({
  type: TOGGLE_IS_GENERATING_MESSAGES
})
