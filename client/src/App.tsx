import React, { Component } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Home from "./components/Home";
import { connect } from "react-redux";

class App extends Component {
  
  render() {
    return (
      <div>
        <Header></Header>
        <Routes>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route path="/" Component={Home}></Route>
        </Routes>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    menus: state.getMenusReducer,
  };
}

export default connect(mapStateToProps)(App);
