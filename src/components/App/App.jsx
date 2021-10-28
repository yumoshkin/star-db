import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundary from '../ErrorBoundary';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import SwapiService from '../../services/swapiService';
import { SwapiServiceProvider } from '../swapi-service-context';
import { StarshipDetails } from '../sw-components';
import './App.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
    swapiService: new SwapiService(),
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />
              <Switch>
                <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} exact />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
