import {z} from 'zod'
import {FastifyReply, FastifyRequest} from 'fastify'
import {NotesUseCase} from '@/use-case/create-notes'
import {PrismaNotesRepository} from '@/repositories/prisma/prisma-notes-repository'

export async function createNote(req: FastifyRequest, res: FastifyReply) {

    const notesRepository = new PrismaNotesRepository()
    const notesUseCase = new NotesUseCase(notesRepository)
    const registerBodySchema = z.object({
        title: z.string(),
        subject: z.string(),
        content: z.string(),
    })

    const {title, subject, content} = registerBodySchema.parse(req.body)

    try {
        await notesUseCase.execute({title, subject, content})
    } catch (err) {
        throw err
    }

    return res.status(201).send()
}