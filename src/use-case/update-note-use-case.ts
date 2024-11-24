import {NotesRepository} from '@/repositories/notes-repository'
import {Notes, Prisma} from '@prisma/client'

interface UpdateNoteRequest {
    id: string,
    data: Prisma.NotesUpdateInput
}

export class UpdateNoteUseCase {
    constructor(private notesRepository: NotesRepository) {
    }

    async execute({id, data}: UpdateNoteRequest): Promise<Notes> {
        return await this.notesRepository.updateNote(id, data)
    }
}