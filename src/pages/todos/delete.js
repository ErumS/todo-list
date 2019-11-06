import React from 'react';
import Delete from '../../components/actionDialog'
import { connect } from 'react-redux';
import { deleteTodo } from '../../redux/todos/actions';

class DeleteForm extends React.Component {
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

  handleSubmit = () => {
    this.props.deleteTodo({
      id: this.props.itemId,
    });
    this.props.close();
  }

  render() {
    const { open } = this.state;

    return (
      <React.Fragment>
        <Delete message="Are you sure you want to delete the task?" itemId={this.props.itemId} open={open} close={() => this.props.close()} submit={this.handleSubmit} actionName="Delete" />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (val) => (dispatch(deleteTodo(val))),
  }
}

export default connect(null, mapDispatchToProps)(DeleteForm);