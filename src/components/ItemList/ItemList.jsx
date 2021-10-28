import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';

const ItemList = (props) => {
  const { data, onItemSelect, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item" key={id} onClick={() => onItemSelect(id)}>
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelect: () => {},
};

ItemList.propTypes = {
  onItemSelect: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
};

export default ItemList;
