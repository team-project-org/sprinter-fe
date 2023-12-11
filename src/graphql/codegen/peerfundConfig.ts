import { CodegenConfig } from '@graphql-codegen/cli';
import gqlConfigGenerator from './gqlGenerator';

export const peerfundPrefix = "peerfund";
export const peerfundURL = "http://13.124.178.210:9090/graphql";
const peerfundConfig: CodegenConfig = gqlConfigGenerator(peerfundPrefix, peerfundURL)

export default peerfundConfig;
