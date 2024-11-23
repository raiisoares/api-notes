import {z} from 'zod'
import {FastifyReply, FastifyRequest} from 'fastify'
import {makeCreateNoteUseCase} from '@/factories/make-create-note-use-case'

export async function createNote(req: FastifyRequest, res: FastifyReply) {
    const createNoteUseCase = makeCreateNoteUseCase()

    const registerBodySchema = z.object({
        title: z.string(),
        subject: z.string(),
        content: z.string(),
    })

    const {title, subject, content} = registerBodySchema.parse(req.body)

    try {
        await createNoteUseCase.execute({title, subject, content})
    } catch (err) {
        throw err
    }

    return res.status(201).send()
}