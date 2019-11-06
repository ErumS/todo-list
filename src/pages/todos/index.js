import React from 'react';
import Layout from '../../themes/layout';
import NewForm from './new';
import DeleteForm from './delete';
import { connect } from 'react-redux';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openEdit: false,
      openDelete: false,
      item: {},
    }

    this.handleNew = this.handleNew.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleNew() {
    this.setState({
      open: true,
    })
  }

  handleUpdate(item) {
    this.setState({
      openEdit: true,
      item,
    })
  }

  handleDelete(item) {
    this.setState({
      openDelete: true,
      item,
    })
  }

  handleClose = (a) => {
    this.setState({
      open: false,
      openEdit: false,
      openDelete: false,
    })
  }

  render() {
    const { open, openEdit, openDelete } = this.state;
    return (      
      <React.Fragment>
        <Layout>
          <div className='container-fluid py-5'>
            <button className='new-todo' onClick={this.handleNew}>Add new Todo</button>
            {open && <NewForm open={true} close={this.handleClose} />}
          </div>
          <div className='container-fluid py-5 table-div'>
            <table className='table'>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>TASK</td>
                  <td>Description</td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.todos.map((item) =>
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.task}</td>
                    <td>{item.description}</td>
                    <td>
                      <button onClick={() => this.handleUpdate(item)}>
                        EDIT
                      </button>
                      {openEdit && <NewForm open={true} close={this.handleClose} item={this.state.item} />}
                    </td>
                    <td>
                      <button onClick={() => this.handleDelete(item)}>
                        DELETE
                      </button>
                      {openDelete && <DeleteForm open={true} close={this.handleClose} itemId={this.state.item.id} />}
                    </td>
                  </tr>
                )} 
              </tbody>
            </table>
          </div>
        </Layout>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return state.allTodos
}

export default connect(mapStateToProps, null)(Index)