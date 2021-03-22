import React from 'react'

export default function ListCard(props) {
  return (
    <div className="list-card">
      <p>{ props.lists.activity }</p>
      <div className="action">
        <button 
          value={ props.lists.id } 
          onClick={ props.delete }>
          Delete
        </button>
      </div>
    </div>
  )
}