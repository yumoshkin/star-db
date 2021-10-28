import React from 'react';

import ItemDetails from '../ItemDetails';
import Record from '../Record';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => (
  <ItemDetails {...props}>
    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="Cost" />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getStarship,
  getImage: swapiService.getStarshipImage,
});

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
