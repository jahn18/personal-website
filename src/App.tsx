import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import { DashboardView } from './views/dashboard/DashboardView';
import { GreekProjectView } from './views/greek-project/GreekProjectView';
import { BibleStudyView } from './views/bible-study/BibleStudyView';

class App extends React.Component {

  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<DashboardView/>}/> 
          <Route path='/greek-philosopher-name' element={<GreekProjectView/>}/> 
          <Route path='/bible-study' element={<BibleStudyView/>}/> 
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
