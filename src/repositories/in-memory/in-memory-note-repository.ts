import { NotesRepository } from '@/repositories/notes-repository';
import { Notes, Prisma } from '@prisma/client';

export class InMemoryNoteRepository implements NotesRepository {
    public items: Notes[] = [];

    async create(data: Prisma.NotesCreateInput): Promise<Notes> {
        const note: Notes = {
            id: `id-${this.items.length + 1}`,
            title: data.title,
            content: data.content,
            subject: data.subject,
            created_at: new Date(),
            status: true,
        };

        this.items.push(note);

        return note;
    }

    async delete(id: string): Promise<void> {
        const index = this.items.findIndex((note) => note.id === id);

        if (index === -1) {
            throw new Error('Note not found');
        }

        this.items.splice(index, 1);
    }

    async findAll(): Promise<Notes[]> {
        return this.items;
    }

    async updateNote(id: string, data: Prisma.NotesUpdateInput): Promise<Notes> {
        const note = this.items.find((note) => note.id === id);

        if (!note) {
            throw new Error('Note not found');
        }

        if (data.title !== undefined) {
            note.title = data.title as string;
        }
        if (data.content !== undefined) {
            note.content = data.content as string;
        }
        if (data.subject !== undefined) {
            note.subject = data.subject as string;
        }

        return note;
    }

    async updateStatus(id: string): Promise<Notes> {
        const note = this.items.find((note) => note.id === id);

        if (!note) {
            throw new Error('Note not found');
        }

        note.status = true;

        return note;
    }
}
