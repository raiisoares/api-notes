import fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import {jsonSchemaTransform, serializerCompiler, validatorCompiler} from 'fastify-type-provider-zod'
import {appRouter} from '@/http/routes'
import {ZodError} from 'zod'
import {env} from '@/env'
import cors from '@fastify/cors'
import cookie from '@fastify/cookie'

export const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'Notes API',
      description: 'Specification from the API routes.',
      version: '1.0.0'
    },
  },
  transform: jsonSchemaTransform
})

app.register(fastifySwaggerUI, {
  routePrefix: '/docs'
})

app.register(appRouter)

app.register(cors, {
  origin: '*',
})

app.register(cookie, {
  parseOptions: {
    httpOnly: true,
    sameSite: 'none',
    secure: true
  }
})

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
        .status(400)
        .send({message: 'Validation error!', issues: error.format()})
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return reply.status(500).send({message: 'Internal Server Error!'})
})