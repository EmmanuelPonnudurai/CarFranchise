import React, { Component } from 'react';
import './App.css';
import './styles.css';
import { ConnectedCarFranchise } from './CarFranchise/carFranchiseContainer';
import ConnectedAllCars from './AllCars/allCarsContainer';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-1">
          <p>Super Cars Store and Franchises</p>
          <div className="flex-grid">
            <div className="col1"><ConnectedAllCars /></div>
          </div>
          <div className="flex-grid">
            <div className="col"><ConnectedCarFranchise franchiseName="Chicago" /></div>
            <div className="col"><ConnectedCarFranchise franchiseName="New Jersey" /></div>
            <div className="col"><ConnectedCarFranchise franchiseName="New York" /></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}