import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import counter from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import { Spin } from 'antd'

const store = createStore(counter)

let  loading = this.state.loading

const render = () => ReactDOM.render(
  <React.StrictMode>
    
    <Spin spinning = {loading} wrapperClassName="page-loading">
      <Provider store ={store}>
        <App  />
      </Provider>
    </Spin>
  </React.StrictMode>,
  document.getElementById('root')
);  

// 监听render方法
store.subscribe(render)
render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
