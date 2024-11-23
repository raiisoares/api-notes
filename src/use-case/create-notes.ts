import {NotesRepository} from '@/repositories/notes-repository'

interface CreateNote {
    title: string
    subject: string
    content: string
}

export class NotesUseCase {
    constructor(private notesRepository: NotesRepository) {}

    async execute({title, subject, content}: CreateNote) {
        await this.notesRepository.create({title, subject, content})
    }
}

