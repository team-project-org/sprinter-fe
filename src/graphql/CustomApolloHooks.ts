import * as Apollo from "@apollo/client";
import { TaggedTemplateExpression } from "typescript";
import { useApolloMultiClient } from "Provider/ApolloMultiClientProvider";

// Re-export everything else that has not been changed
export * from "@apollo/client";

// For this example project we will limit the hooks to normal queries.
// Here you would also add custom hooks for lazy queries, mutations, etc.
export function useQuery<
  TData = any,
  TVariables extends Apollo.OperationVariables = Apollo.OperationVariables
>(
  query:
    | Apollo.DocumentNode
    | Apollo.TypedDocumentNode<TaggedTemplateExpression, TVariables>,
  options?: Apollo.QueryHookOptions<TData, TVariables>
): Apollo.QueryResult<TData, TVariables> {
  const ctx = useApolloMultiClient();
  const client = ctx.getClient(options?.context?.clientName);
  const newOptions: Apollo.QueryHookOptions<TData, TVariables> = {
    ...options,
    client,
  };

  return Apollo.useQuery<TData, TVariables>(query, newOptions);
}
