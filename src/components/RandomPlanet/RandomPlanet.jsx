import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapiService';
import PlanetView from '../PlanetView';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    mode: 'loading',
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.setPlanet();
    this.interval = setInterval(this.setPlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setPlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          planet,
          mode: 'showing',
        });
      })
      .catch(() => {
        this.setState({
          mode: 'error',
        });
      });
  };

  render() {
    const { planet, mode } = this.state;

    let content;
    switch (mode) {
      case 'loading':
        content = <Spinner />;
        break;
      case 'showing':
        content = <PlanetView planet={planet} />;
        break;
      case 'error':
        content = <ErrorIndicator />;
        break;
      default:
        content = null;
        break;
    }

    return <div className="random-planet jumbotron rounded">{content}</div>;
  }
}

RandomPlanet.defaultProps = {
  updateInterval: 7000,
};

RandomPlanet.propTypes = {
  updateInterval: PropTypes.number,
};
