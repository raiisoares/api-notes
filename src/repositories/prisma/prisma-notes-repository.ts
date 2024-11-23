import {prisma} from '@/lib/prisma'
import {Notes, Prisma} from '@prisma/client'
import {NotesRepository} from '@/repositories/notes-repository'

export class PrismaNotesRepository implements NotesRepository {
    async create(data: Prisma.NotesCreateInput): Promise<Notes> {
        return prisma.notes.create({data})
    }

    async delete(id: string): Promise<void> {
        await prisma.notes.delete({where: {id}})
    }
}