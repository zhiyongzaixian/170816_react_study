import React from 'react';
import Search from './Search';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    // 初始化状态
    this.state = {
      searchName: ''
    }
  }

  search = (searchName) => {
    console.log(searchName);
    // 更新状态
    this.setState({searchName});
  };
  render () {
    let {searchName} = this.state;
    return (
      <div className="container">
        <Search search={this.search}/>
        <List searchName={searchName}/>
      </div>
    );
  }
}


export default App;