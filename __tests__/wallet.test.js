const request = require('supertest')
const app = require('../index')

jest.setTimeout(10000)

describe('Get Endpoints', () => {
  it('Should be able to fetch transactions', async () => {
    const res = await request(app)
      .get('/transactions?walletId=61a524cc40023f7e3efbcad4&skip=0')
      .expect(200)
  })
})

describe('Get Endpoints', () => {
  it('Should be able to fetch wallet details', async () => {
    const res = await request(app)
      .get('/wallet/61a524cc40023f7e3efbcad4')
      .expect(200)
  })
})