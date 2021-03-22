import React, { Component } from 'react'
import ListCard from "./ListCard";

class Request extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      activity: '', 
      todoList: [],
      valueButton: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  displayLists = () => {
    fetch('http://localhost:4000/todo')
      .then(result => result.json())
      .then(lists => this.setState({
        todoList: lists
      }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.displayLists()
  }

  handleChange = (event) => {
    this.setState({
      activity: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:4000/todo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        activity: this.state.activity
      })
    })
    .then(() => this.setState({
      activity: ''
    }))
    .then(() => this.displayLists())
    .catch(err => console.log(err))
  }

  handleDelete = (event) => {
    let targetId = event.target.value
    fetch('http://localhost:4000/todo/' + targetId, { method: 'DELETE' })
      .then(() => this.displayLists())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <div className="request">
          <form onSubmit={ this.handleSubmit }>
            <input type="text"
              name="activity"
              placeholder="Enter Your Activity"
              onChange={ this.handleChange }
              value={ this.state.activity }
            />
            <button type="submit"><i className="fas fa-long-arrow-right"></i></button>
          </form>
        </div>
        <div className="lists">
        {
          this.state.todoList.map(lists => {
            return <ListCard 
              lists={ lists } 
              valueButton={ this.state.valueButton }
              delete={ (value) => this.handleDelete(value) } 
              key={ lists.id } 
            />
          })
        }
        </div>
      </React.Fragment>
    )
  }
}

export default Request