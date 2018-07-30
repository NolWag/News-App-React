import React, { Component } from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top imgHeight" src={this.props.img} />
          <p className="card-text heightRes">{this.props.title}</p>
          <p className="card-text">{this.props.author}</p>
          <div className="btn-group justify-content-center">
            <a target="_blank" href={this.props.link}>
            <button className="btn-primary">View</button>
          </a>
          <a target="_blank" href="#">
          <button className="btn-primary">{this.props.author}</button>
        </a>
          </div>

        </div>
      </div>
    )
  }
}

export default Article
