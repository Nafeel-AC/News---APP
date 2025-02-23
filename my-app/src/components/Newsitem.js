import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imgurl, newsUrl} = this.props
    return (
      <div className="card my-3">
        <img src={imgurl || "https://via.placeholder.com/300x200"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    )
  }
}

export default Newsitem