import React, { Component } from "react";



export class NewsItem extends Component {

  render() {

    let { title, description, imageUrl, newsUrl, author, date, source, newsCategory } = this.props;

    return (

      <div className="card my-3" style={{ width: "18rem" }}>

        <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${newsCategory==="sports"?'primary':newsCategory==='technology'?'success':'danger'}`} style={{left:'90%'}}>

          {source}

        </span>

        <img src={imageUrl} className="card-img-top" alt="..." style={{ height: '12rem' }} />

        <div className={`card-body bg-${this.props.mode==='light'?'light':'dark'} text-${this.props.mode==='light'?'dark':'light'}`}>

          <h5 className="card-title" style={{ height: '3rem', overflow: 'hidden' }}>{title}...</h5>

          <p className="card-text" style={{ height: '8rem', overflow: 'hidden' }}>{description}...</p>

          <p className="card-text"><small className={`text-${this.props.mode==='light'?'body-secondary':'light'}`}>Published by {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>

          <a href={newsUrl} rel="noreferrer" className={`btn btn-${newsCategory==="sports"?'primary':newsCategory==='technology'?'success':'primary'}`} target="_blank">Read More</a>

        </div>

      </div>

    )

  }

} 