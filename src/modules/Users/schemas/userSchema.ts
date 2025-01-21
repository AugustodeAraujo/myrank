import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email format"),
  nickname: z.string().min(3, "Nickname must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Inferência do tipo para reutilizar nos DTOs, se necessário
export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;
