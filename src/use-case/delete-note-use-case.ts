import {NotesRepository} from '@/repositories/notes-repository'

interface DeleteRequest {
    id: String
}

export class DeleteNoteUseCase {
    constructor(private notesRepository: NotesRepository) {
    }

    async execute({id}: DeleteRequest): Promise<void> {
        await this.notesRepository.delete(id)
    }
}

