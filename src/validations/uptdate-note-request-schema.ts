import {z} from 'zod'
import {NoteRequestSchema} from '@/validations/note-request-schema'

export const UpdateNoteRequestSchema = z.object({
  id: z.string().uuid(),
  data: NoteRequestSchema
})