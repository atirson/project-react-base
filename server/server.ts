import { createServer } from 'node:http'
import { mergeSchemas } from '@graphql-tools/schema'
import { createYoga } from 'graphql-yoga'

import { exampleMutationSchema } from './graphql/exampleMutation/exampleMutation'

const allSchema = mergeSchemas({
  schemas: [exampleMutationSchema],
})

const yoga = createYoga({ schema: allSchema })

const server = createServer(yoga)

server.listen(4000, () => {
  console.log('Server is running on port http://localhost:4000/graphql')
})
