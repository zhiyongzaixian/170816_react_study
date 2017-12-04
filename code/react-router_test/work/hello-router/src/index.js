import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';

import App from './components/App';
import About from './components/About';
import Repos from './components/Repos';
import Home from './components/Home';

/*
*   1、注册路由
*   2、Router： 路由器组件： 管理路由
*     * history: 管理路由地址的
*   3、Route： 注册路由
*     path: 路由路径
* */
// 渲染组件
ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='/about' component={About}></Route>
        <Route path='/repos' component={Repos}></Route>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);