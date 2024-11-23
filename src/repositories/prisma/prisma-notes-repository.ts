import {prisma} from '@/lib/prisma'
import {Prisma} from '@prisma/client'
import {NotesRepository} from '@/repositories/notes-repository'

export class PrismaNotesRepository implements NotesRepository {
    async create(data: Prisma.NotesCreateInput) {
        return prisma.notes.create({data})
    }
}