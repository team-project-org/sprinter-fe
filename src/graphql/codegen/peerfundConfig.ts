import { CodegenConfig } from '@graphql-codegen/cli';
import { API, peerfundURL } from '../ApolloClients';

const peerfundConfig: CodegenConfig = {
  schema: peerfundURL,
  documents: 'src/**/*.pf.graphql',
  overwrite: true,
  generates: {
    'src/graphql/generated/peerfund.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        apolloReactHooksImportFrom: '../CustomApolloHooks',
        defaultBaseOptions: {
          context: {
            clientName: API.Peerfund,
          },
        },
      },
    },
    'src/graphql/generated/peerfund.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default peerfundConfig;
