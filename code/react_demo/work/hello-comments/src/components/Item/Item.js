import React, {Component} from 'react';

class Item extends Component {
  // 定义删除的方法
  delComment = () => {
    // console.log(this.props.index);
    if(window.confirm(`你确定删除 ${this.props.comment.username} 吗？`)){
      this.props.del(this.props.index);
    }
  };
  render(){
    let {comment} = this.props;
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.delComment}>删除</a>
        </div>
        <p className="user"><span >{comment.username}</span><span> 说: </span></p>
        <p className="centence">{comment.comment}</p>
      </li>
    )
  }
}

export default Item;