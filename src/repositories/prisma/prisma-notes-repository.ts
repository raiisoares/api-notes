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

    async findALl(): Promise<Notes[]> {
        return prisma.notes.findMany()
    }

    async updateStatus(id: string): Promise<Notes> {
        return prisma.notes.update({where:  {id}, data: {status: false}})
    }
}