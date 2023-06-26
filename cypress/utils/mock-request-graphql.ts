import { CyHttpMessages } from 'cypress/types/net-stubbing'

export const hasOperationName = (
  operationName: string,
  req: CyHttpMessages.IncomingHttpRequest,
  params?: string,
) => {
  if (!req.body.query) {
    return false
  }
  if (params) {
    return (
      req.body.query.includes(operationName) && req.body.query.includes(params)
    )
  }
  return req.body.query.includes(operationName)
}
