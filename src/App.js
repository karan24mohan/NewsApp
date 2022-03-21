import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";

import React, { Component } from "react";

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;

  render() {
    {
      return (
        <div className="App">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <News
                  PageSize={6}
                  key="general"
                  country="in"
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route path="/About" element={<About />} />
            <Route
              path="/general"
              element={
                <News
                  PageSize={6}
                  key="general"
                  country="in"
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            />

            <Route
              path="/entertainment"
              element={
                <News
                  PageSize={6}
                  key="entertainment"
                  country="in"
                  category="entertainment"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  PageSize={6}
                  key="sports"
                  country="in"
                  category="sports"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  PageSize={6}
                  key="business"
                  country="in"
                  category="business"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  PageSize={6}
                  key="technology"
                  country="in"
                  category="technology"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  PageSize={6}
                  key="health"
                  country="in"
                  category="health"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  PageSize={6}
                  key="science"
                  country="in"
                  category="science"
                  apiKey={this.apiKey}
                />
              }
            />
          </Routes>
        </div>
      );
    }
  }
}
