import {Prisma, Notes} from '@prisma/client'

export interface NotesRepository {
    create(data: Prisma.NotesCreateInput): Promise<Notes>

    delete(id: String): Promise<void>

    findALl(): Promise<Notes[]>

    updateStatus(id: String): Promise<Notes>
}