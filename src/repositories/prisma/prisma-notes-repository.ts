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

    async findAll(): Promise<Notes[]> {
        return prisma.notes.findMany()
    }

    async updateStatus(id: string): Promise<Notes> {
        return prisma.notes.update({where: {id}, data: {status: true}})
    }

    updateNote(id: string, data: Prisma.NotesUpdateInput): Promise<Notes> {
        return prisma.notes.update({where: {id}, data: {...data}})
    }
}