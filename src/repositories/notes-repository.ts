import {Prisma, Notes} from '@prisma/client'

export interface NotesRepository {
    create(data: Prisma.NotesCreateInput): Promise<Notes>
}