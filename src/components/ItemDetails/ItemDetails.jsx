import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import './ItemDetails.css';

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    mode: 'loading',
  };

  componentDidMount() {
    this.setItem();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId
      || this.props.getData !== prevProps.getData
      || this.props.getImage !== prevProps.getImage
    ) {
      this.setState({
        mode: 'loading',
      });
      this.setItem();
    }
  }

  setItem = () => {
    const { itemId, getData, getImage } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImage(itemId),
          mode: 'showing',
        });
      })
      .catch(() => {
        this.setState({
          mode: 'error',
        });
      });
  };

  renderItem = (item) => {
    const { name } = item;

    return (
      <>
        <img className="item-image" src={this.state.image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => React.cloneElement(
              child, { item },
            ))}
          </ul>
        </div>
      </>
    );
  };

  render() {
    const { item, mode } = this.state;

    if (!item) {
      return <span>Select an item from list</span>;
    }

    let content;
    switch (mode) {
      case 'loading':
        content = <Spinner />;
        break;
      case 'showing':
        content = this.renderItem(item);
        break;
      case 'error':
        content = <ErrorIndicator />;
        break;
      default:
        content = null;
        break;
    }

    return <div className="item-details card">{content}</div>;
  }
}
