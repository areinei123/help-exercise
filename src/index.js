import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import MessageList from './components/message-list'
import {reducer, initialState} from './redux/reducer'

const store = createStore(reducer, initialState)

const NewApp = require('./components/message-list').default

function renderApp(App) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'))
}

renderApp(MessageList)

if (module.hot) {
  module.hot.accept('./components/message-list', () => {
    renderApp(NewApp)
  })
}
