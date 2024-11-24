import {NotesRepository} from '@/repositories/notes-repository'
import {Notes} from '@prisma/client'

export class FindAllNotesUseCase {
    constructor(private notesRepository: NotesRepository) {
    }

    async execute(): Promise<Notes[]> {
        return await this.notesRepository.findALl()
    }
}