import {reducer, initialState} from '../reducer'
import {
  addMessage,
  deleteMessage,
  deleteAllMessages,
  toggleIsGeneratingMessages,
} from '../actions'

it('should return the initial state', () => {
  expect(reducer(initialState, {})).toEqual(initialState);
});

it('should handle GET_POST_START', () => {
  const expectState = {...initialState, errorMessages: [
    {message: 'an error', priority: 1, priorityLevel: 'error'}
  ]}
  // it's empty on purpose because it's just starting to fetch posts
  expect(reducer(
    initialState,
    addMessage({message: 'an error', priority: 1}))
  ).toEqual(expectState);
});
