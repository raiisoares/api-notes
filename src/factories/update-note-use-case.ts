import {PrismaNotesRepository} from '@/repositories/prisma/prisma-notes-repository'
import {UpdateNoteUseCase} from '@/use-case/update-note-use-case'

export function makeUpdateNoteUseCase(){
    const notesRepository = new PrismaNotesRepository()
    return new UpdateNoteUseCase(notesRepository)
}