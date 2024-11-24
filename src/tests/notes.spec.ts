import { describe, expect, it } from 'vitest'
import { NotesUseCase } from '@/use-case/create-note-use-case'
import { InMemoryNoteRepository } from '@/repositories/in-memory/in-memory-note-repository'
import { DeleteNoteUseCase } from '@/use-case/delete-note-use-case'
import { UpdateStatusUseCase } from '@/use-case/update-note-status-use-case'
import { UpdateNoteUseCase } from '@/use-case/update-note-use-case'
import { FindAllNotesUseCase } from '@/use-case/find-all-notes-use-case'

const validNoteMock = {
    title: 'title',
    content: 'content',
    subject: 'subject',
};

const inMemoryRepository = new InMemoryNoteRepository()
const createNoteUseCase = new NotesUseCase(inMemoryRepository)
const deleteNoteUseCase = new DeleteNoteUseCase(inMemoryRepository)
const updateNoteStatusUseCase = new UpdateStatusUseCase(inMemoryRepository)
const updateNoteUseCase = new UpdateNoteUseCase(inMemoryRepository)
const findAllNotesUseCase = new FindAllNotesUseCase(inMemoryRepository)

describe('Notes use cases', () => {
    it('Should create a note', async () => {
        const response = await createNoteUseCase.execute({ ...validNoteMock })
        expect(response.note.id).toEqual(expect.any(String))
        expect(response.note.title).toBe(validNoteMock.title)
        expect(response.note.content).toBe(validNoteMock.content)
        expect(response.note.subject).toBe(validNoteMock.subject)
    })

    it('Should delete a note', async () => {
        const response = await createNoteUseCase.execute({ ...validNoteMock })
        await deleteNoteUseCase.execute({ id: response.note.id })

        await expect(() => {
            return updateNoteStatusUseCase.execute({ id: response.note.id })
        }).rejects.toThrow('Note not found')
    })

    it('Should find all notes', async () => {
        await createNoteUseCase.execute({ ...validNoteMock })
        await createNoteUseCase.execute({ ...validNoteMock })
        await createNoteUseCase.execute({ ...validNoteMock })

        const notes = await findAllNotesUseCase.execute()

        expect(notes.length).toBe(4)
    })

    it('Should update a note', async () => {
        const response = await createNoteUseCase.execute({ ...validNoteMock })
        const updatedNoteData = {
            title: 'Updated title',
            content: 'Updated content',
            subject: 'Updated subject',
        }
        const updatedNote = await updateNoteUseCase.execute({
            id: response.note.id,
            data: updatedNoteData,
        })

        expect(updatedNote.title).toBe(updatedNoteData.title)
        expect(updatedNote.content).toBe(updatedNoteData.content)
        expect(updatedNote.subject).toBe(updatedNoteData.subject)
    })

    it('Should throw an error when updating a non-existent note', async () => {
        const invalidId = 'invalid-id'
        const updatedNoteData = {
            title: 'Updated title',
            content: 'Updated content',
            subject: 'Updated subject',
        }

        await expect(() => {
            return updateNoteUseCase.execute({
                id: invalidId,
                data: updatedNoteData,
            })
        }).rejects.toThrow('Note not found')
    })

    it('Should update the status of a note', async () => {
        const response = await createNoteUseCase.execute({ ...validNoteMock });
        const updatedNote = await updateNoteStatusUseCase.execute({
            id: response.note.id,
        })

        expect(updatedNote.status).toBe(true)
    })

    it('Should throw an error when updating the status of a non-existent note', async () => {
        const invalidId = 'invalid-id'

        await expect(() => {
            return updateNoteStatusUseCase.execute({ id: invalidId })
        }).rejects.toThrow('Note not found')
    })
})
