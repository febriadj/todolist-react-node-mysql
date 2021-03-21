import React, { Component } from 'react'
import ListCard from "./ListCard";

class Request extends Component {
  constructor(props) {
    super(props)

    this.state = { activity: '', todoList: [] }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

    this.setState({
      activity: ''
    })

    this.displayLists()
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
            <button>Submit</button>
          </form>
        </div>
        <div className="lists">
        {
          this.state.todoList.map(lists => {
            return <ListCard lists={ lists } key={ lists.id } />
          })
        }
        </div>
      </React.Fragment>
    )
  }
}

export default Request