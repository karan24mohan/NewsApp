import React, { Component } from "react";
// import App from "App.css";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, source } = this.props;
    return (
      <div className="row">
        <div className="col d-flex align-items-stretch">
          <div className="card h-100" style={{ height: "100%" }}>
            <div style={{ display: "flex", position: "absolute", right: "0" }}>
              <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
            <img src={imageUrl} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title"> {title}</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">
                  By {author ? author : "Unknown"}
                </small>
              </p>
              <a href={url} target="_blank" className="btn btn-sm btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
