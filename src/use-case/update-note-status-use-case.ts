import {NotesRepository} from '@/repositories/notes-repository'
import {Notes} from '@prisma/client'

interface UpdateStatusRequest {
    id: String
}

export class UpdateStatusUseCase {
    constructor(private notesRepository: NotesRepository) {
    }

    async execute({id}: UpdateStatusRequest): Promise<Notes> {
        return await this.notesRepository.updateStatus(id)
    }
}