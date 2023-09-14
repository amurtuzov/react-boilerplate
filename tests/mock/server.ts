import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { successResponseMock } from './response/example'

const handlers = [
  rest.post(`url`, async (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(successResponseMock))
  }),
]

export const server = setupServer(...handlers)
