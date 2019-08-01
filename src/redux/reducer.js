import {
  ADD_GENERATED_MESSAGE,
  DELETE_MESSAGE_FROM_LIST,
  DELETE_ALL_MESSAGES,
  TOGGLE_IS_GENERATING_MESSAGES,
} from './actions.js'

export const initialState = {
  errorMessages: [],
  warningMessages: [],
  infoMessages: [],
  isGeneratingMessages: true,
};

export const reducer = (state, action) => {
  const {type} = action
  switch(type){
    case ADD_GENERATED_MESSAGE:
      const {message} = action
      const whereToPutMessage = `${message.priorityLevel}Messages`
      return {
        ...state,
        [whereToPutMessage]: [...state[whereToPutMessage], message]
      }
    case DELETE_MESSAGE_FROM_LIST:
      const {priorityLevel, value} = action
      return {
        ...state,
        [`${priorityLevel}Messages`]: [`${priorityLevel}Messages`].filter(
          messageObj => messageObj.message !== value
        )
      }
    case DELETE_ALL_MESSAGES:
      return {
        ...state,
        errorMessages: [],
        warningMessages: [],
        infoMessages: [],
      }
    case TOGGLE_IS_GENERATING_MESSAGES:
      return {
        ...state,
        isGeneratingMessages: !state.isGeneratingMessages
      }
    default:
      return state;
  }
}
