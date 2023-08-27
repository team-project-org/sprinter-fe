import { ApolloClient, InMemoryCache } from "@apollo/client";

export enum API {
  SpaceX = "SpaceX",
  StarWars = "StarWars",
  Countries = "Countries",
  Peerfund = "Peerfund",
}

export const spacexURL = "https://spacex-production.up.railway.app/";
export const starWarsURL =
  "https://swapi-graphql.netlify.app/.netlify/functions/index";
export const countriesURL = "https://countries.trevorblades.com/graphql";
export const peerfundURL = "http://13.124.178.210:9090/graphql";

export const spacexApolloClient = new ApolloClient({
  uri: spacexURL,
  cache: new InMemoryCache(),
});

export const starWarsApolloClient = new ApolloClient({
  uri: starWarsURL,
  cache: new InMemoryCache(),
});

export const countriesApolloClient = new ApolloClient({
  uri: countriesURL,
  cache: new InMemoryCache(),
});

export const peerfundApolloClient = new ApolloClient({
  uri: countriesURL,
  cache: new InMemoryCache(),
});

