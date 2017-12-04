import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
  render(){
    return (
      <div>
        <h2>App组件。。。</h2>
        <ul>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/repos">repos</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;