'use strict'

const fastify = require('fastify')()
const path = require('path')

const { PORT = 8080 } = process.env

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'build')
})

fastify.listen(PORT, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
