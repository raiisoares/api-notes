import {FastifyReply, FastifyRequest} from 'fastify'
import {makeFindAllNotesUseCase} from '@/factories/make-find-all-notes-use-case'

export async function findAllNotes(req: FastifyRequest, res: FastifyReply) {
    const findAllNotesUseCase = makeFindAllNotesUseCase()

    try {
        const notes = await findAllNotesUseCase.execute()
        return res.status(200).send(notes)
    } catch (err) {
        throw err
    }
}