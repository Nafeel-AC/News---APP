import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=yourapikey&page=${this.state.page}&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.updateNews();
    });
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.updateNews();
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey Top-Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem 
                  title={element.title ? element.title.slice(0, 45) : ""} 
                  description={element.description ? element.description.slice(0, 88) : ""} 
                  imgurl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} 
                  onClick={this.handlePrevClick} 
                  className="btn btn-dark">
            &larr; Previous
          </button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults/15)} 
                  onClick={this.handleNextClick} 
                  className="btn btn-dark">
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
