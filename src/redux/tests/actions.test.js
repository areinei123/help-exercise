// import '@testing-library/react/cleanup-after-each'
// import '@testing-library/jest-dom/extend-expect'

import {
  addMessage,
  deleteMessage,
  deleteAllMessages,
  toggleIsGeneratingMessages,
  ADD_GENERATED_MESSAGE,
  DELETE_MESSAGE_FROM_LIST,
  DELETE_ALL_MESSAGES,
  TOGGLE_IS_GENERATING_MESSAGES,
} from '../actions'

test('adding a message', () => {
  const originalMessage = {
    message: 'an error',
    priority: 1
  }
  const shouldEqual = {
    type: ADD_GENERATED_MESSAGE,
    message: {
      message: 'an error',
      priority: 1,
      priorityLevel: 'error',
    },
  }

  expect(addMessage(originalMessage)).toEqual(shouldEqual)
})

test('deleting a message', () => {
  const shouldEqual = {
    type: DELETE_MESSAGE_FROM_LIST,
    value: 'an error',
    priorityLevel: 'error'
  }

  expect(deleteMessage('an error', 'error')).toEqual(shouldEqual)
})

test('deleting all messages', () => {
  const shouldEqual = {
    type: DELETE_ALL_MESSAGES,
  }

  expect(deleteAllMessages()).toEqual(shouldEqual)
})

test('toggling message generator', () => {
  const shouldEqual = {
    type: TOGGLE_IS_GENERATING_MESSAGES,
  }

  expect(toggleIsGeneratingMessages()).toEqual(shouldEqual)
})
