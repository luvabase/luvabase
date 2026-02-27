import { z } from "zod"

export type LuvaEnvType = z.infer<typeof LuvaEnv>
export const LuvaEnv = z.lazy(() =>
  z.object({
    podId: z.string().describe("The id of the pod"),
    appVersion: z.string(),
    installedAt: z.string(),
    updatedAt: z.string(),
    services: z.record(z.string(), RuntimeService),
  }),
)

const TursoRuntimeService = z.object({
  type: z.literal("turso"),
  name: z.string(),
  databaseName: z.string(),
  databaseApiToken: z.string(),
  databaseHostname: z.string(),
})

const RuntimeService = z.union([TursoRuntimeService])
