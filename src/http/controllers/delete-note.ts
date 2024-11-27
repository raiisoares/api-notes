import {z} from 'zod'
import {FastifyReply, FastifyRequest} from 'fastify'
import {makeDeleteNoteUseCase} from '@/factories/make-delete-note-use-case'

export async function deleteNote(req: FastifyRequest, res: FastifyReply) {
    const deleteNoteUseCase = makeDeleteNoteUseCase()

    const deleteNoteParamsSchema = z.object({
        id: z.string().min(1, "ID é obrigatório"),
    })

    const { id } = deleteNoteParamsSchema.parse(req.params)

    try {
        await deleteNoteUseCase.execute({id})
    } catch (err) {
        throw err
    }

    return res.status(200).send()
}