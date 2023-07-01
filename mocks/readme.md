## Gerando Mocks GraphQL

Este projeto usa a biblioteca `graphql-tools` para gerar mocks para um esquema GraphQL. Os mocks são usados para simular dados de um servidor GraphQL durante o desenvolvimento e testes de um cliente GraphQL.

A biblioteca `graphql-tools` fornece a função `addMocksToSchema`, que pode ser usada para gerar mocks para um esquema GraphQL. A função aceita um objeto com as seguintes propriedades:

- `schema`: o esquema GraphQL para o qual os mocks serão gerados.
- `mocks`: um objeto que define os mocks para cada tipo no esquema. Cada propriedade do objeto deve ter o nome de um tipo no esquema e o valor deve ser uma função que retorna um objeto com os campos do tipo e seus valores simulados.
- `resolvers` (opcional): um objeto que define resolvers para campos específicos no esquema. Cada propriedade do objeto deve ter o nome de um tipo no esquema e o valor deve ser um objeto que define resolvers para os campos do tipo.

A função `addMocksToSchema` retorna um novo esquema GraphQL com os mocks adicionados. O novo esquema pode ser usado para criar um servidor GraphQL ou para testar um cliente GraphQL.

Neste projeto, o esquema GraphQL é definido no arquivo `schema.graphql`. A função `generateSchema` é usada para criar um esquema GraphQL a partir do arquivo. Em seguida, a função `addMocksToSchema` é usada para gerar mocks para o esquema. Os mocks são definidos no objeto `mocks`, que define mocks para os tipos `User` e `Post`. O objeto `resolvers` define resolvers para os campos `total` da consulta `Query.total` e `name` da mutação `Mutation.changeMyName`.

Por fim, o esquema com os mocks adicionados é passado para a função `createYoga`, que cria um servidor GraphQL usando a biblioteca `yoga`. O servidor pode ser usado para testar um cliente GraphQL ou para fornecer dados simulados durante o desenvolvimento.

Espero que esta documentação ajude a entender como o projeto de criar mocks funciona.

## To run 

```bash
  pnpm run dev
```

## Code Example

```ts
// graphql.schema 

type User {
  id: ID!
  name: String!
  email: String!
  age: Int!
  posts: [Post]
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}

type Mutation {
  changeMyName(newName: String!): User!
}

type Query {
  me: User!
  users: [User!]!
  posts: [Post!]!
  userById(name: String!): User!
  getPost(id: ID!): Post!
}

// Generate Schema

const schemaFiles = readdirSync(process.cwd()).filter(file => /schema\.graphql$/.test(file))

const typeDefs = schemaFiles.map(file => readFileSync(join(process.cwd(), file), 'utf8')).join('\n')


const schema = makeExecutableSchema({
  typeDefs,
})


const schemaWithMocks = addMocksToSchema({
  schema,
  resolvers: store => ({
    Query: {
      getPost: (_, { id }) => {
        if (id === '1') {
          return store.get('Post', id)
        }

        return null
      },
      users: () => {
        return [...new Array(10)].map((_, index) => store.get('User', index))
      },
    },
    Mutation: {
      changeMyName(_, { newName }) {

        store.set('Query', 'ROOT', 'me', { name: newName })
 
        return store.get('Query', 'ROOT', 'me')
      }
    },
  }) as IMocks,
  mocks: {
    String: () => faker.lorem.sentence(),
    User: () => ({
      email: faker.internet.email(),
    }),
  },
})

// Export a Server GraphQL using Yoga

const allSchema = mergeSchemas({
  schemas: [
    schemaWithMocks
  ],
})

const yoga = createYoga({ schema: allSchema})

const server = createServer(yoga)

server.listen(4000, () => {
  console.log('Server is running on port http://localhost:4000/graphql')
})

```