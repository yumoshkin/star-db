import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipList } from '../sw-components';

const StarshipsPage = ({ history }) => (
  <StarshipList
    onItemSelect={(itemId) => {
      history.push(itemId);
    }}
  />
);

export default withRouter(StarshipsPage);
