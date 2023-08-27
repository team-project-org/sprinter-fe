import { CodegenConfig } from '@graphql-codegen/cli';
import { spacexURL } from '../../graphql/ApolloClients';

const spacexConfig: CodegenConfig = {
  schema: spacexURL,
  documents: [
    'src/**/*.graphql',
    '!src/**/*.sw.graphql',
    '!src/**/*.countries.graphql',
    '!src/**/*.pf.graphql',
  ],
  overwrite: true,
  generates: {
    'src/graphql/generated/spacex.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        apolloReactHooksImportFrom: '../CustomApolloHooks',
      },
    },
    'src/graphql/generated/spacex.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default spacexConfig;
