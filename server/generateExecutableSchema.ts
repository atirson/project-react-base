import { readFileSync } from 'fs'
import { join } from 'path'

import { makeExecutableSchema } from '@graphql-tools/schema'

export const generateSchema = (file: string) => {
  const typeDefs = readFileSync(join(process.cwd(), file), 'utf8')

  return makeExecutableSchema({
    typeDefs,
  })
}
