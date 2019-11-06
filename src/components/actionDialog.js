import React from 'react';
import Popup from "reactjs-popup";

const Delete = (props) => {
  const closeModal = () => {
    props.close();
  }

  return (
    <React.Fragment>
      { props.open && 
        <Popup open={props.open} modal closeOnDocumentClick onClose={closeModal}>
          <div className='container px-5 py-2'>
            <div className='row'>
              <h4>Delete</h4>
              <div className='col'>
                <button type='button' className='close' onClick={closeModal}>
                  &times;
                </button>
              </div>
            </div>
            <form onSubmit={props.submit}>
              <div className='row px-5 py-3'>
                <div className='col-12'>
                  {props.message}
                </div>
              </div>
              <div className='row px-5 py-3'>
                <div className='col-6'>
                  <button type='submit'>{props.actionName}</button>
                </div>
                <div className='col-6'>
                  <button type='button' onClick={closeModal}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </Popup>
      }
    </React.Fragment>
  )
}

export default Delete;