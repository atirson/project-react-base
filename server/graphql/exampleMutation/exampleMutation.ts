import { IMocks, addMocksToSchema } from '@graphql-tools/mock'
import { generateSchema } from '../../generateExecutableSchema'
import { faker } from '@faker-js/faker'

export const exampleMutationSchema = addMocksToSchema({
  schema: generateSchema('graphql/exampleMutation/exampleMutation.graphql'),
  resolvers: (store) =>
    ({
      Mutation: {
        addProducts: (_, { input }) => {
          store.set('Query', 'ROOT', 'total', { total: input[0].quantity })
          return store.get('Query', 'ROOT', 'total')
        },
      },
    } as IMocks),
  mocks: {
    Int: () => faker.number.int(100),
  },
})
