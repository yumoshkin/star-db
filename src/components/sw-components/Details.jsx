import React from 'react';

import ItemDetails from '../ItemDetails';
import Record from '../Record';
import { SwapiServiceConsumer } from '../SwapiServiceContext';

const PersonDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getPerson, getPersonImage }) => (
      <ItemDetails
        itemId={itemId}
        getData={getPerson}
        getImage={getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);

const PlanetDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getPlanet, getPlanetImage }) => (
      <ItemDetails
        itemId={itemId}
        getData={getPlanet}
        getImage={getPlanetImage}
      >
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);

const StarshipDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getStarship, getStarshipImage }) => (
      <ItemDetails
        itemId={itemId}
        getData={getStarship}
        getImage={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);

export { PersonDetails, PlanetDetails, StarshipDetails };
