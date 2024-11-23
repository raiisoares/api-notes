import {NotesRepository} from '@/repositories/notes-repository'
import {Notes} from '@prisma/client'

interface CreateNoteRequest {
    title: string
    subject: string
    content: string
}

interface CreateNoteResponse {
    note: Notes
}

export class NotesUseCase {
    constructor(private notesRepository: NotesRepository) {
    }

    async execute({title, subject, content}: CreateNoteRequest): Promise<CreateNoteResponse> {
        const note = await this.notesRepository.create({title, subject, content})

        return {
            note
        }
    }
}

