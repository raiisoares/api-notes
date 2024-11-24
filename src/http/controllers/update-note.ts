import {FastifyReply, FastifyRequest} from 'fastify'
import {z} from 'zod'
import {makeUpdateNoteUseCase} from '@/factories/update-note-use-case'

export async function updateNote(req: FastifyRequest, res: FastifyReply) {
    const updateNoteUseCase = makeUpdateNoteUseCase()

    const updateNoteStatusSchema = z.object({
        id: z.string(),
        data: z.object({
            title: z.string().optional(),
            subject: z.string().optional(),
            content: z.string().optional(),
        })
    })

    const {id, data} = updateNoteStatusSchema.parse(req.body)

    try {
        const updatedNote = await updateNoteUseCase.execute({id, data})
        return res.status(200).send(updatedNote)
    } catch (err) {
        throw err
    }
}