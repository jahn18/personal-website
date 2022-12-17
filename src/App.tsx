import React from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { DashboardView } from './views/dashboard/DashboardView';
import { GreekProjectView } from './views/greek-project/GreekProjectView';

class App extends React.Component {

  render() {
    return (
      // <DashboardView/>
      <Routes>
        <Route path='/' element={<DashboardView/>}></Route> 
        <Route path='/greek-philosopher-name' element={<GreekProjectView/>}></Route> 
      </Routes>
    );
  }
}

export default App;
