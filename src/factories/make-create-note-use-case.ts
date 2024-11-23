import {PrismaNotesRepository} from '@/repositories/prisma/prisma-notes-repository'
import {NotesUseCase} from '@/use-case/create-note-use-case'

export function makeCreateNoteUseCase(){
    const notesRepository = new PrismaNotesRepository()
    return new NotesUseCase(notesRepository)
}