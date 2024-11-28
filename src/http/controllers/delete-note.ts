import {z} from 'zod'
import {FastifyInstance} from 'fastify'
import {makeDeleteNoteUseCase} from '@/factories/make-delete-note-use-case'
import {ZodTypeProvider} from 'fastify-type-provider-zod'

export async function deleteNote(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>()
      .delete('/notes/:id', {
        schema: {
          summary: 'Delete a note',
          tags: ['notes'],
          params: z.object({
            id: z.string().uuid()
          })
        },
      }, async (request, reply) => {
        const deleteNoteUseCase = makeDeleteNoteUseCase()
        const {id} = request.params

        try {
          await deleteNoteUseCase.execute({id})
        } catch (err) {
          throw err
        }

        return reply.status(200).send()
      })
}