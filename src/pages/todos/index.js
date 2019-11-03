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
    const todo = nextProps.todo.todoReducer;
    const stateData = this.state.data;
    let data = stateData;
    if(todo.type === 'ADD_TODO')
      data = stateData.concat({id: todo.data.id, task: todo.data.fields.task, description: todo.data.fields.description})
    else if(todo.type === 'EDIT_TODO'){
      stateData.forEach(item => {
        if(item.id === todo.data.id){
          item.task = todo.data.fields.task;
          item.description = todo.data.fields.description;
        }
      })
      data = stateData;
    }
    else if(todo.type === 'DELETE_TODO') {
      data = stateData.filter(function(ele){
        return ele.id !== todo.data.id;
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

const mapStateToProps = (state) => ({
  todo: state,
})

export default connect(mapStateToProps, null)(Index)