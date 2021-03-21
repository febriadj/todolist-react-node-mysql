import React from 'react'

export default function ListCard(props) {
  return (
    <div className="list-card">
      <p>{ props.lists.activity }</p>
    </div>
  )
}