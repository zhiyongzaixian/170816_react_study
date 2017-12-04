import React from 'react';
import {Link} from 'react-router';

class Repos extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      repos: [
        {name: 'google', repo: 'angular'},
        {name: 'facebook', repo: 'react'},
        {name: 'facebook', repo: 'yarn'},
        {name: 'antd', repo: 'antd'}
      ]
    }
  }
  render(){
    let {repos} = this.state;
    return (
      <div>
        <h2>Repos组件。。。</h2>
        <ul>
          {
            repos.map((item, index) => {
              return <li key={index}><Link activeClassName="active2" to={`/repos/${item.name}/${item.repo}`}>{item.repo}</Link></li>
            })
          }
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default Repos;