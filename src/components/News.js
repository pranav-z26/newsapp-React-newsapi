import React, { Component } from "react";

import { NewsItem } from "./NewsItem";

import { Spinner } from "./Spinner";



export class News extends Component {



  constructor() {

    super();

    // console.log('from constructor ---------->>>>')

    this.state = {

      articles: [],

      loading: false,

      page: 1

    }

  }



  async componentDidMount() {

    // console.log('cmd')

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed1b44fe7a07409bbfaa1769ee6bc3b4&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true })

    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({ loading: false })

    console.log(parsedData)

    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })

  }



  handlePrevclick = async () => {

    console.log('Prev clicked');



    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed1b44fe7a07409bbfaa1769ee6bc3b4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true })

    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({

      articles: parsedData.articles,

      page: this.state.page - 1,

      loading: false

    })

  }

  handleNextclick = async () => {

    console.log('Next clicked');



    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {



    }

    else {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed1b44fe7a07409bbfaa1769ee6bc3b4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

      this.setState({ loading: true })

      let data = await fetch(url);

      let parsedData = await data.json();

      this.setState({

        articles: parsedData.articles,

        page: this.state.page + 1,

        loading: false

      })

    }

  }



  render() {

    // console.log('frm render ----->>')

    return (

      <div className="container my-4">



        <div>

        <h1 className={`text-center text-${this.props.mode==='light'?'dark':'light'}`}>NewsPro - Top Headlines <small style={{fontSize:'1.2rem', position:'absolute'}}><span className="badge text-bg-info">{this.props.category}</span></small></h1>

        </div>



        {this.state.loading && <Spinner />}



        <div className="row" style={{marginLeft:'5rem'}}>

          {!this.state.loading && this.state.articles.map((element) => {

            return <div className="col-md-4" key={element.url}>

              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} newsCategory={this.props.category} mode={this.props.mode} togglemode={this.props.togglemode}/>

            </div>

          })}

        </div>



        <div className="container d-flex justify-content-between">

          <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>

          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>

        </div>

      </div>

    )

  }

}