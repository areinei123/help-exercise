import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import {reducer, initialState} from '../../redux/reducer'
import {render, fireEvent} from '@testing-library/react'
import MessageList from '../message-list'

test("renders all the lists of messages", () => {
  const errorMessages = [{message: "an error message", priority: 1, priorityLevel: 'error'}]
  const warningMessages = [{message: "a warning message", priority: 2, priorityLevel: 'warning'}]
  const infoMessages = [{message: "an info message", priority: 3, priorityLevel: 'info'}]
  const newState = {...initialState, errorMessages, warningMessages, infoMessages}
  const store = createStore(reducer, newState)

  const {queryByText, getByLabelText, getByText} = render(
    <Provider store={store}>
      <MessageList />
    </Provider>
  )

  expect(queryByText("an info message")).toBeInTheDocument()
})
