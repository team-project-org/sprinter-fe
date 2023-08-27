import { CodegenConfig } from '@graphql-codegen/cli';
import { API, starWarsURL } from '../../graphql/ApolloClients';

const starWarsConfig: CodegenConfig = {
  schema: starWarsURL,
  documents: 'src/**/*.sw.graphql',
  overwrite: true,
  generates: {
    'src/graphql/generated/starwars.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        apolloReactHooksImportFrom: '../CustomApolloHooks',
        defaultBaseOptions: {
          context: {
            clientName: API.StarWars,
          },
        },
      },
    },
    'src/graphql/generated/starwars.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default starWarsConfig;
