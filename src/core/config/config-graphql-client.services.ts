import { GraphQLClient, RequestDocument } from 'graphql-request'
import {
  GraphQLClientResponse,
  GraphQLClientRequestHeaders,
} from 'node_modules/graphql-request/build/esm/types'

export function responseMiddleware(
  res: GraphQLClientResponse<unknown> | Error,
) {
  // Check if the response is an error
  return res
}

export const graphqlClient = {
  request: async <T = unknown>(
    query: string | RequestDocument,
    vars?: Record<string, unknown> | undefined,
    headers?: GraphQLClientRequestHeaders,
  ): Promise<T> => {
    const client = new GraphQLClient('Empty API URL', {
      responseMiddleware,
    })

    return await client.request(query as string, vars, {
      ...headers,
    })
  },
}
