import React from 'react';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';
import { editTodo } from '../../redux/actions';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      fields: {
        task: props.item.task,
        description: props.item.description,
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  closeModal() {
    this.setState({
      fields: [],
    });
    this.props.close();
  }

  handleSubmit = (e) => {
    this.props.editTodo({
      id: this.props.item.id,
      fields: this.state.fields,
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
                <h4>Edit task</h4>
                <div className='col'>
                  <button type='button' className='close' onClick={this.closeModal}>
                    &times;
                  </button>
                </div>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className='row px-5 py-3'>
                  <div className='col-3'>Task:</div>
                  <div className='col-9'>
                    <input
                      value={this.state.fields.task}
                      onChange={this.handleChange}
                      name='task'
                    />
                  </div>
                </div>
                <div className='row px-5 py-3'>
                  <div className='col-3'>Description:</div>
                  <div className='col-9'>
                    <input
                      value={this.state.fields.description}
                      onChange={this.handleChange}
                      name='description'
                    />
                  </div>
                </div>
                <div className='row px-5 py-3'>
                  <button type='submit' className='submit-button'>Submit</button>
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
    editTodo: (val) => (dispatch(editTodo(val))),
  }
}

export default connect(null, mapDispatchToProps)(Edit);