import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { DashboardView } from './views/dashboard/DashboardView';
import { GreekProjectView } from './views/greek-project/GreekProjectView';
import { BibleStudyView } from './views/bible-study/BibleStudyView';

class App extends React.Component {

  render() {
    return (
      <Routes>
        <Route path='/' element={<DashboardView/>}/> 
        <Route path='/greek-philosopher-name' element={<GreekProjectView/>}/> 
        <Route path='/bible-study' element={<BibleStudyView/>}/> 
      </Routes>
    );
  }
}

export default App;
