import fastify from 'fastify'
import {appRouter} from '@/http/routes'
import {ZodError} from 'zod'
import {env} from '@/env'
import cors from '@fastify/cors'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(appRouter)
app.register(cors, {
    origin: '*',
})

fastify.register(cookie, {
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