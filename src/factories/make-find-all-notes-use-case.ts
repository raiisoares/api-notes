import {PrismaNotesRepository} from '@/repositories/prisma/prisma-notes-repository'
import {FindAllNotesUseCase} from '@/use-case/find-all-notes-use-case'

export function makeFindAllNotesUseCase(){
    const notesRepository = new PrismaNotesRepository()
    return new FindAllNotesUseCase(notesRepository)
}