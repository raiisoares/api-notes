import {createNote} from '@/http/controllers/create-note'
import {FastifyInstance} from 'fastify'
import {deleteNote} from '@/http/controllers/delete-note'
import {findAllNotes} from '@/http/controllers/find-all-notes'
import {updateNoteStatus} from '@/http/controllers/update-note-status'
import {updateNote} from '@/http/controllers/update-note'

export function appRouter(app: FastifyInstance) {
  app.register(createNote)
  app.register(deleteNote)
  app.register(findAllNotes)
  app.register(updateNoteStatus)
  app.register(updateNote)
}

