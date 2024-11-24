import {FastifyReply, FastifyRequest} from 'fastify'
import {makeUpdateNoteStatusUseCase} from '@/factories/update-note-status-use-case'
import {z} from 'zod'

export async function updateNoteStatus(req: FastifyRequest, res: FastifyReply) {
    const updateNoteStatusUseCase = makeUpdateNoteStatusUseCase()

    const updateNoteStatusSchema = z.object({
        id: z.string(),
    })

    const {id} = updateNoteStatusSchema.parse(req.body)

    try {
        const notes = await updateNoteStatusUseCase.execute({id})
        return res.status(200).send(notes)
    } catch (err) {
        throw err
    }
}