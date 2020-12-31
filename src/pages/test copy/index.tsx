import React from 'react';
import { useTitle, useRequest } from 'ahooks';
import './test.less';


function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('sdsds');
    }, 10);
  });
}
function Test() {
  useTitle('test', { restoreOnUnmount: true })
  const { data, error, loading } = useRequest(getUsername);
  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return <div className='container'>
    <div className='left'></div>
    <div className='center'></div>
    <div className='right'></div>
  </div>;

}

export default Test;
