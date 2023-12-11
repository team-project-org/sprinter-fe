import { CodegenConfig } from '@graphql-codegen/cli';
import gqlConfigGenerator from './gqlGenerator';

export const countiresPrefix = "countries"
export const countriesURL = "https://countries.trevorblades.com/graphql";
const countriesConfig: CodegenConfig = gqlConfigGenerator(countiresPrefix, countriesURL)

export default countriesConfig;
