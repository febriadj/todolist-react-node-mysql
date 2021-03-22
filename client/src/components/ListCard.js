import React from 'react'

export default function ListCard(props) {
  function configDate() {
    const date = new Date(props.lists.created_at)

    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })
  }

  return (
    <div className="list-card">
      <div className="info">
        <p className="activity">{ props.lists.activity }</p>
        <p className="date">{ configDate() }</p>
      </div>
      <div className="action">
        <button 
          value={ props.lists.id } 
          onClick={ props.delete }>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  )
}