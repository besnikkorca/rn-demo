import React from 'react';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import postsReducer from '../../store/reducers/posts';

const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const StoreWrapper = props => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};

export default StoreWrapper;
