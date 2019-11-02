import React from 'react';
import './theme.css';

function Layout(props) {
  return (
    <div>
      <div className='container-fluid layout-row'>
        <div className='row px-5 py-2'>
          <div className='col px-0 py-3'>
            <h4>Todo App</h4>
          </div>
        </div>
      </div>
      {props.children}
      <div className='container-fluid footer-row'>
        <div className='row footer-content'>
          {'Copyright © ToDo - All Rights Reserved '}
          {new Date().getFullYear()}
          {'.'}
        </div>
      </div>
    </div>
  )
}

export default Layout;