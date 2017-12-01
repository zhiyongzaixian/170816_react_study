import React, {Component} from 'react';
import Add from '../Add/Add';
import List from '../List/List';

class App extends Component {
  constructor(props){
    super(props);
    // 初始化状态
    this.state = {
      comments: [
        {username: '山西人', comment: '我们有煤矿'},
        {username: '雄县人', comment: '我在雄安有两亩地'}
      ]
    };
  }
  // 定义添加comment的函数
  add = (comment) => {
    let {comments} = this.state;
    comments.unshift(comment);
    this.setState({comments});
  };
  // 定义删除comment的方法
  del = (index) => {
    let {comments} = this.state;
    comments.splice(index, 1);
    // 更新状态
    this.setState({comments});
  };
  render(){
    let {comments} = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add add={this.add}/>
          <List comments={comments} del={this.del}/>
        </div>
      </div>
    )
  }
}

export default App;