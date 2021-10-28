import React from 'react';
import { withRouter } from 'react-router-dom';

import Row from '../Row';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      left={<PersonList onItemSelect={(itemId) => history.push(itemId)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default withRouter(PeoplePage);
