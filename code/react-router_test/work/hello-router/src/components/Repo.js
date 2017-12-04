import React from 'react';

function Repo({params}) {
  // this.props  this--->undefined
  return <h3>用户名:{params.name}, 仓库名:{params.repo}</h3>
}
export default Repo;