import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';

import App from './components/App';
import About from './components/About';
import Repos from './components/Repos';
import Home from './components/Home';
import Repo from './components/Repo';

import './index.css';

/*
*   1、注册路由
*   2、Router： 路由器组件： 管理路由
*     * history: 管理路由地址的
*   3、Route： 注册路由
*     path: 路由路径
*   4、IndexRoute： 默认子路由组件
*   5、占位符：  ：xxx
* */
// 渲染组件
ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='/about' component={About}></Route>
        <Route path='/repos' component={Repos}>
          <Route path='/repos/:name/:repo' component={Repo}></Route>
        </Route>

      </Route>
    </Router>
  ),
  document.getElementById('root')
);