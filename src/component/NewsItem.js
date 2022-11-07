import React, { Component } from "react";

export class NewsItem extends Component {
 

  render() {
    let { title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
       
          <img
            src={!imageUrl?"https://c.ndtvimg.com/2022-11/oefii9lo_karnataka-murder_625x300_06_November_22.jpg":imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary btn-dark">
              Read More
            </a>
          </div> 
        </div>
      </div>
    );
  }
}

export default NewsItem;
