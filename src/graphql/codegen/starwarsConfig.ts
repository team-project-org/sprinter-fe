import { CodegenConfig } from '@graphql-codegen/cli';
import gqlConfigGenerator from './gqlGenerator';

export const starWasPrefix = 'sw'
export const starWarsURL = "https://swapi-graphql.netlify.app/.netlify/functions/index";
const starWarsConfig: CodegenConfig = gqlConfigGenerator(starWasPrefix, starWarsURL)

export default starWarsConfig;
