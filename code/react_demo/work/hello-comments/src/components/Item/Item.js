import React, {Component} from 'react';

class Item extends Component {
  render(){
    let {comment} = this.props;
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;">删除</a>
        </div>
        <p className="user"><span >{comment.username}</span><span> 说: </span></p>
        <p className="centence">{comment.comment}</p>
      </li>
    )
  }
}

export default Item;