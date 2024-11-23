import {PrismaNotesRepository} from '@/repositories/prisma/prisma-notes-repository'
import {DeleteNoteUseCase} from '@/use-case/delete-note-use-case'

export function makeDeleteNoteUseCase(){
    const notesRepository = new PrismaNotesRepository()
    return new DeleteNoteUseCase(notesRepository)
}