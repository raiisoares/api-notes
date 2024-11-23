import {NotesRepository} from '@/repositories/notes-repository'
import {Notes, Prisma} from '@prisma/client'

export class InMemoryNoteRepository implements NotesRepository {
    public items: Notes[] = []

    async create(data: Prisma.NotesCreateInput) {
        const note = {
            id: 'id-1',
            title: data.title,
            content: data.content,
            subject: data.subject,
            created_at: new Date(),
            status: true
        }

        this.items.push(note)

        return note
    }
}