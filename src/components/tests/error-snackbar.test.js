import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {reducer, initialState} from '../../redux/reducer'
import {render, fireEvent} from '@testing-library/react'
import ErrorSnackbar from '../error-snackbar'
import {addMessage} from '../../redux/actions'

test("renders a snackbar when an error happens", () => {
  const messages = [{message: "a message", priority: 1, priorityLevel: 'error'}]
  const newState = {...initialState, errorMessages: messages}
  const store = createStore(reducer, newState)

  const {queryByText, getByLabelText, getByText} = render(
    <Provider store={store}>
      <ErrorSnackbar />
    </Provider>
  )

  expect(queryByText("a message")).toBeInTheDocument()
})
