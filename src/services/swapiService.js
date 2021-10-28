export default class SwapiService {
  apiBase = 'https://swapi.dev/api';

  imageBase = 'https://starwars-visualguide.com/assets/img';

  getResoursce = async (url) => {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  };

  getAllPeople = async () => {
    const res = await this.getResoursce('/people/');
    return res.results.map(this.transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResoursce(`/people/${id}/`);
    return this.transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResoursce('/planets/');
    return res.results.map(this.transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResoursce(`/planets/${id}/`);
    return this.transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResoursce('/starships/');
    return res.results.map(this.transformStarship);
  };

  getStarship = async (id) => {
    const starship = await this.getResoursce(`/starships/${id}/`);
    return this.transformStarship(starship);
  };

  getPersonImage = (id) => `${this.imageBase}/characters/${id}.jpg`;

  getStarshipImage = (id) => `${this.imageBase}/starships/${id}.jpg`;

  getPlanetImage = (id) => `${this.imageBase}/planets/${id}.jpg`;

  extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  transformPlanet = (planet) => ({
    id: this.extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  });

  transformStarship = (starship) => ({
    id: this.extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity,
  });

  transformPerson = (person) => ({
    id: this.extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
  });
}
