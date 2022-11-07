import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {


  constructor(){
    super();
    console.log("Hello I am Construvtor from news component");
    this.state ={ 
      articles: [],
      loading: false,
      page:1
      }
  }
  
  async componentDidMount(){ 
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=513b6457396f41bb817e1190f2bae29a&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles , totalResults: parseData.totalResults})
  }

  handlePrevClick = async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=513b6457396f41bb817e1190f2bae29a&page=${this.state.page -1}pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({
      page:this.state.page - 1,
      articles: parseData.articles
    })

  }

  handleNextClick = async ()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
    console.log("Aage");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=513b6457396f41bb817e1190f2bae29a&page=${this.state.page +1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({
      page:this.state.page + 1,
      articles: parseData.articles
    })
  }

  }

  render() {
      return (
        <div className="container my-3">
          <h2>News - TopHeadlines</h2>
          <div className="row">
              {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem 
                  title={element.title?element.title.slice(0, 35):""}
                  description={element.description?element.description.slice(0, 70):""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
          </div>
          })}    
          </div>
          <div className="container d-flex justify-content-between" >
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
    );
  }
} 

export default News;