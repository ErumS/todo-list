import React from 'react';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';
import { deleteTodo } from '../../redux/actions';

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    }

    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    this.setState({
      fields: [],
    });
    this.props.close();
  }

  handleSubmit = (e) => {
    this.props.deleteTodo({
      id: this.props.itemId,
    });
    this.props.close();
  }

  render() {
    const { open } = this.state;

    return (
      <div>
        <div>
          <Popup open={open} modal closeOnDocumentClick onClose={this.closeModal}>
            <div className='container px-5 py-2'>
              <div className='row'>
                <h4>Delete task</h4>
                <div className='col'>
                  <button type='button' className='close' onClick={this.closeModal}>
                    &times;
                  </button>
                </div>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className='row px-5 py-3'>
                  <div className='col-12'>
                    Are you sure you want to delete the task?
                  </div>
                </div>
                <div className='row px-5 py-3'>
                  <div className='col-6'>
                    <button type='submit'>Delete</button>
                  </div>
                  <div className='col-6'>
                    <button type='button' onClick={this.closeModal}>Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </Popup>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (val) => (dispatch(deleteTodo(val))),
  }
}

export default connect(null, mapDispatchToProps)(Delete);