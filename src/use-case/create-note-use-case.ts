import {NotesRepository} from '@/repositories/notes-repository'
import {Notes} from '@prisma/client'

interface CreateNoteRequest {
  title: string
  subject: string
  content: string
}

export class NotesUseCase {
  constructor(private notesRepository: NotesRepository) {
  }

  async execute({title, subject, content}: CreateNoteRequest): Promise<Notes> {
    return await this.notesRepository.create({title, subject, content})

  }
}

