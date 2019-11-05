import React from 'react';
import Layout from '../../themes/layout';
import NewForm from './new';
import EditForm from './edit';
import DeleteForm from './delete';
import { connect } from 'react-redux';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    const addTodo = nextProps.add;
    const editTodo = nextProps.edit;
    const deleteTodo = nextProps.delete;
    const stateData = this.state.data;
    let data = stateData;
    if(addTodo.type === 'ADD_TODO')
      data = stateData.concat({id: addTodo.data.id, task: addTodo.data.fields.task, description: addTodo.data.fields.description})
    else if(editTodo.type === 'EDIT_TODO'){
      stateData.forEach(item => {
        if(item.id === editTodo.data.id){
          item.task = editTodo.data.fields.task;
          item.description = editTodo.data.fields.description;
        }
      })
      data = stateData;
    }
    else if(deleteTodo.type === 'DELETE_TODO') {
      data = stateData.filter(function(ele){
        return ele.id !== deleteTodo.data.id;
      });
    }
    this.setState({
      data,
    })
  }

  render() {
    const { data, open, openEdit, openDelete } = this.state;
    
    return (      
      <div>
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
                {data.map((item) =>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.task}</td>
                    <td>{item.description}</td>
                    <td>
                      <button onClick={() => this.handleUpdate(item)}>
                        EDIT
                      </button>
                      {openEdit && <EditForm open={true} close={this.handleClose} item={this.state.item} />}
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    add: state.add,
    edit: state.edit,
    delete: state.delete,
  }
}

export default connect(mapStateToProps, null)(Index)