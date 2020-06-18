import React from 'react'
import moment from 'moment'

import AuthorDisplay from './AuthorDisplay'

// style
let maxWidth = {
  width: '800px'
}

const PostDisplay = props => {
  let { title, body, userId } = props.post
  return (
    <div className="card border-secondary mb-3" style={maxWidth}>
      <div className="card-header"><AuthorDisplay userId={userId} /></div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <span className="badge badge-secondary">{moment().calendar()}</span>
        <p className="card-text">{body}</p>
        <button type="button" class="btn btn-secondary disabled btn-sm">Read More</button>
      </div>
    </div>

  )
}

export default PostDisplay
