import React from 'react';

import { SwapiServiceConsumer } from '../swapi-service-context';

// eslint-disable-next-line react/display-name
const withSwapiService = (mapMethodsToProps) => (Wrapped) => (props) => (
    <SwapiServiceConsumer>
      {(swapiService) => {
        const serviceProps = mapMethodsToProps(swapiService);
        return <Wrapped {...props} {...serviceProps} />;
      }}
    </SwapiServiceConsumer>
);

export default withSwapiService;
