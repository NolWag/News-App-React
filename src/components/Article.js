import React, { Component } from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src={this.props.img} />
          <p className="card-text">{this.props.title}</p>
          <p className="card-text">{this.props.author}</p>
          <button className="btn-primary">View</button>
        </div>
      </div>
    )
  }
}

export default Article
