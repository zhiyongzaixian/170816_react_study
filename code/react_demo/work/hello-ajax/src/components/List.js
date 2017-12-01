import React from 'react';
import axios from 'axios';
class List extends React.Component {
  constructor(props) {
    super(props);
    // 初始化状态
    this.state = {
      firstView: true,
      loading: false,
      users: null,
      error: null
    };
  }
  // 组件将要接收props数据或者是props数据发生变化的时候调用
  componentWillReceiveProps(nextProps){ // 最新的props对象
    console.log(nextProps);

    // 更新状态
    this.setState({
      firstView: false,
      loading: true
    });
    // 发送请求
    let url = `https://api.github.com/search/users?q=${nextProps.searchName}`;
    axios.get(url)
      .then(response => {
        let data = response.data;
        // 更新状态
        this.setState({
          loading: false,
          users: data.items
        });
      })
      .catch(error => {
        // 更新状态
        this.setState({
          loading: false,
          error
        });
      })
  }
  render () {
    let {firstView, loading, users, error} = this.state;
    if(firstView){
      return <h2>enter name to search</h2>
    }else if(loading){
      return <h2>loading...</h2>
    }else if(users){
      return (
        <div className="row">
          {
            users.map((item, index) => {
              return (
                <div key={index} className="card">
                  <a href={item.html_url} target="_blank">
                    <img src={item.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">{item.login}</p>
                </div>
              )
            })
          }
        </div>
      );
    }else {
      return <p>暂时没有匹配到用户，请重新匹配</p>
    }
  }
}


export default List;