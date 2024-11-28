import {z} from 'zod'

export const NoteResponseSchema = z.object({
  title: z.string(),
  subject: z.string(),
  content: z.string(),
  status: z.boolean(),
  id: z.string().uuid(),
  created_at: z.date(),
})