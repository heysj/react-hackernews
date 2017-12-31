import { createBrowserHistory, createMemoryHistory } from 'history'
import { routerReducer as router, routerMiddleware } from 'react-router-redux'
import { compose, combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

export const history = __SERVER__
  ? createMemoryHistory()
  : createBrowserHistory()

const composeEnhancers =
  (__DEV__ && !__SERVER__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export default initialState =>
  createStore(
    combineReducers({
      ...reducers,
      router,
    }),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)),
  )

export * from './actions'
export * from './selectors'
