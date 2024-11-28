import {z} from 'zod'

export const NoteRequestSchema = z.object({
  title: z.string(),
  subject: z.string(),
  content: z.string(),
})