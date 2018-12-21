import React, { Component } from "react";
import "./App.css";
import Settings from "../Settings";
import Dashboard from "../Dashboard";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import Content from "../Shared/Content";

import AppProvider from "./AppProvider";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
            <Dashboard />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
