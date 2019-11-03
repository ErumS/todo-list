import React from 'react';
import Layout from '../../themes/layout';
import NewForm from './new';
import { connect } from 'react-redux';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      open: false,
    }

    this.handleNew = this.handleNew.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleNew() {
    this.setState({
      open: true,
    })
  }

  handleClose = (a) => {
    this.setState({
      open: false,
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let data = this.state.data.concat({id: nextProps.todo.addATodo.data.id, task: nextProps.todo.addATodo.data.fields.task, description: nextProps.todo.addATodo.data.fields.description})
    this.setState({
      data,
    })
  }

  render() {
    const { data, open } = this.state;
    
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
                    <td><button>EDIT</button></td>
                    <td><button>DELETE</button></td>
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