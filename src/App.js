import React, { Component } from "react";
import { Layout, Content } from "react-mdl";
import "./App.css";
import Main from "./components/main";
// import { Link } from "react-router-dom";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
