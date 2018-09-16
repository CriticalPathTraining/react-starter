import * as React from 'react';
import * as AppImages from './../images/AppImages';

import './../../node_modules/office-ui-fabric-react/dist/css/fabric.min.css';
import './App.scss';

export default class App extends React.Component<any, any> {

  render(): JSX.Element {
    return (
      <div id="app-container" >
        <div id="banner-row" >
          <div id="banner" >
            <div>React Starter Project</div>
          </div>
        </div>
        <div id="content-body-row" >
          <div id="content-body">

            <h3>It's time to get started with React.js</h3>

            <p>This started project has been created to help you get started developing with React.js, TypeScript, Webpack and the Office UI Fabric.</p>

            <div className="reactImage">
              <img src={AppImages.React} alt="React.js Logo" />
            </div>

          </div>
        </div>
      </div>
    );
  }
}