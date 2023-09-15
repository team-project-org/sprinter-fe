import { CodegenConfig } from '@graphql-codegen/cli';
import gqlConfigGenerator from './gqlGenerator';

export const spacexPrefix = "spacex"
export const spacexURL = "https://spacex-production.up.railway.app/";
const spacexConfig: CodegenConfig = gqlConfigGenerator(spacexPrefix, spacexURL)

export default spacexConfig;
