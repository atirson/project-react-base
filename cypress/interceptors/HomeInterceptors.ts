import { hasOperationName } from '../utils/mock-request-graphql'

export const interceptGetUser = () => {
  return cy
    .intercept('GET', '/user', (req) => {
      if (hasOperationName('GetUser', req)) {
        req.alias = 'getUser'
        req.reply({
          body: {
            user: {
              name: 'John Doe',
              email: 'john@email.com',
            },
          },
        })
      }
    })
    .as('getUser')
}
