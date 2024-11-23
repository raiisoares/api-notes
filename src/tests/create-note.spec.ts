import {describe, expect, it} from 'vitest'
import {NotesUseCase} from '@/use-case/create-note-use-case'
import {InMemoryNoteRepository} from '@/repositories/in-memory/in-memory-note-repository'

describe('Notes', () => {
    it('Should create a note', async () => {
        const inMemoryRepository = new InMemoryNoteRepository()
        const createNoteUseCase = new NotesUseCase(inMemoryRepository)

        const response = await createNoteUseCase.execute({
            title: 'title',
            content: 'content',
            subject: 'subject'
        })

        expect(response.note.id).toEqual(expect.any(String))
    })
})