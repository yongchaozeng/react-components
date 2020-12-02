import React from 'react';
import { useTitle, useRequest } from 'ahooks';
import './App.css';


function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('sdsds');
    }, 1000);
  });
}
function Test() {
  useTitle('test', { restoreOnUnmount: true })


  const { data, error, loading } = useRequest('/api/userInfo');
  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return <div>Username: {data}</div>;

}

export default Test;
