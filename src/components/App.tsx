import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import './App.css';

export default class App extends React.Component<any, any> {

  render() {
    return (
      <div id="page-container" className="container">

        <div className="row navbar navbar-expand-sm navbar-dark bg-dark" role="navigation" >
          <h2 style={{ 'color': 'white' }} >React Starter Project</h2>
        </div>

        <div className="jumbotron">
          <h3>Here's your big opportunity</h3>
          <div>Time to build a single page application (SPA) with React.js.</div>
        </div>

      </div>
    );
  }

}