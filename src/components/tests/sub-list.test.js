import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import {reducer, initialState} from '../../redux/reducer'
import {render, fireEvent} from '@testing-library/react'
import SubList from '../sub-list'

test("renders a list of messages", () => {
  const messages = [{message: "a message", priority: 1, priorityLevel: 'error'}]
  const newState = initialState
  newState.errorMessages = messages
  const store = createStore(reducer, newState)

  const {queryByText, getByLabelText, getByText} = render(
    <Provider store={store}>
      <SubList type='error' />
    </Provider>
  )

  expect(queryByText("a message")).toBeInTheDocument()
})
