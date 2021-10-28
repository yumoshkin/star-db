import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

// eslint-disable-next-line react/display-name
const withData = (View) => class extends Component {
    state = {
      items: [],
      loading: true,
      error: false,
    };

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    update() {
      this.setState({
        loading: true,
        error: false,
      });

      this.props
        .getData()
        .then((items) => {
          this.setState({
            items,
            loading: false,
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true,
          });
        });
    }

    render() {
      const { items, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorIndicator />;
      }

      return <View {...this.props} data={items} />;
    }
};

export default withData;
