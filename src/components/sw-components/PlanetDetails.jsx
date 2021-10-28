import React from 'react';

import ItemDetails from '../ItemDetails';
import Record from '../Record';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => (
  <ItemDetails {...props}>
    <Record field="population" label="Population" />
    <Record field="rotationPeriod" label="Rotation Period" />
    <Record field="diameter" label="Diameter" />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getPlanet,
  getImage: swapiService.getPlanetImage,
});

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
