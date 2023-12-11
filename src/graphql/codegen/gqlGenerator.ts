const gqlConfigGenerator = (clientName: string, schemaUrl: string) => ({
  schema: schemaUrl,
  documents: `src/**/*.${clientName}.graphql`,
  overwrite: true,
  generates: {
    [`src/graphql/generated/${clientName}.ts`]: {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        apolloReactHooksImportFrom: '../CustomApolloHooks',
        defaultBaseOptions: {
          context: {
            clientName,
          },
        },
      },
    },
    [`src/graphql/generated/${clientName}.schema.json`]: {
      plugins: ['introspection'],
    },
  },
});

export default gqlConfigGenerator