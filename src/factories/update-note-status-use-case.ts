import {PrismaNotesRepository} from '@/repositories/prisma/prisma-notes-repository'
import {UpdateStatusUseCase} from '@/use-case/update-note-status-use-case'

export function makeUpdateNoteStatusUseCase(){
    const notesRepository = new PrismaNotesRepository()
    return new UpdateStatusUseCase(notesRepository)
}