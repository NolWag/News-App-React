import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Article from './components/Article';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=692a5231f2854ebd9c4044caaee0d528')
      .then(res => {
        const news = res.data.articles;
        this.setState({ news });
      })
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
        {
          this.state.news.map((article) => <Article img={article.urlToImage} title={article.title}/>)
        }
        </div>
      </div>
    );
  }
}

export default App;
