import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from './components/MainLayout';
import ColorPicker from './components/colorPicker';
import MyText from './components/myText';
import Photos from './components/Photos';

export default (
      <Router history={ browserHistory }>
        <Route component={ MainLayout }>
            <Route path="/" component = { ColorPicker } />
            <Route path="/text" component = { MyText } />
            <Route path="/photos" component = { Photos } />
        </Route>
      </Router>
  );
