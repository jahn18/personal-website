import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { DashboardView } from './views/dashboard/DashboardView';

class App extends React.Component {

  render() {
    return (
      <DashboardView />
    );
  }
}

export default App;
