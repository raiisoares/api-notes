import {FastifyInstance} from 'fastify'
import {makeFindAllNotesUseCase} from '@/factories/make-find-all-notes-use-case'
import {ZodTypeProvider} from 'fastify-type-provider-zod'
import {FindAllResponseSchema} from '@/validations/find-all-response-schema'

export async function findAllNotes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>()
      .get('/notes', {
        schema: {
          summary: 'Find all notes',
          tags: ['notes'],
          response: {
            200: FindAllResponseSchema
          }
        },
      }, async (_, reply) => {
        const findAllNotesUseCase = makeFindAllNotesUseCase()

        try {
          const notes = await findAllNotesUseCase.execute()
          return reply.status(200).send(notes)
        } catch (err) {
          throw err
        }
      })
}