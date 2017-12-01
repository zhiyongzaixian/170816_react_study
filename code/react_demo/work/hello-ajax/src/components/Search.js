import React from 'react';
class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  // 定义搜索的方法
  searchUsers = () => {
    // 收集数据
    let searchName = this.refs.searchName.value;
    // 将数据交给App
    this.props.search(searchName);
  };
  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref="searchName" type="text" placeholder="enter the name you search"/>
          <button onClick={this.searchUsers}>Search</button>
        </div>
      </section>
    );
  }
}


export default Search;