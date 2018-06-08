/*
 * @flow
 */

import Immutable from 'immutable';
import createSagaMiddleware from 'redux-saga';

import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import property from '../../../testData/property.json';

import sagas from '../sagas/Sagas';
import reduxReducer from './ReduxReducer';

export default function initializeReduxStore(routerHistory :any) :Object {

  const sagaMiddleware = createSagaMiddleware();

  const reduxMiddlewares = [
    sagaMiddleware,
    routerMiddleware(routerHistory)
  ];

  const reduxEnhancers = [
    applyMiddleware(...reduxMiddlewares)
  ];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      maxAge: 100
    })
    : compose;
  /* eslint-enable */

  const reduxStore = createStore(
    reduxReducer(),
    Immutable.Map({ property, activeItem: 0 }),
    composeEnhancers(...reduxEnhancers)
  );

  sagaMiddleware.run(sagas);

  return reduxStore;
}
