import { z } from "zod"

export type AppManifest = z.infer<typeof AppManifest>
export const AppManifest = z.lazy(() =>
  z.object({
    identifier: z
      .string()
      .regex(/^[a-z0-9-]+$/)
      .min(3)
      .max(50)
      .optional()
      .describe(
        "Globally unique url safe and lowercased identifier for the app e.g. 'luvabase-snake' (required for Luvabase submissions)",
      ),
    name: z
      .string()
      .min(3)
      .max(30)
      .describe("Name of the app e.g. 'Snake' (max 30 characters)"),
    subtitle: z
      .string()
      .min(3)
      .max(50)
      .optional()
      .describe(
        "Subtitle of the app e.g. 'Play the classic of classics' (max 50 characters)",
      ),
    description: z
      .string()
      .max(10000)
      .optional()
      .describe("Full description of the app"),
    screenshots: z
      .array(z.string())
      .optional()
      .describe(
        "Relative paths of app screenshots e.g. ['images/screenshot1.png', 'images/screenshot2.png']",
      ),
    category: z
      .string()
      .optional()
      .describe(
        "Could be 'productivity', 'health', etc (must be one of the standard categories listed here https://github.com/w3c/manifest/wiki/Categories)",
      ),
    icon: z
      .string()
      .optional()
      .describe(
        "Relative path of the app icon inside the .luva app file e.g. 'images/icon.png'",
      ),
    repository: z
      .string()
      .optional()
      .describe(
        "URL of the source code repository e.g. 'https://github.com/luvabase/snake'",
      ),
    services: z
      .array(
        z.object({
          type: z.enum(["turso"]),
          name: z.string(),
        }),
      )
      .optional(),
    relatedApps: z.array(RelatedApp).optional(),
  }),
)

export const RelatedApp = z.object({
  type: z.enum(["android", "ios"]),
  identifier: z.string(), // android package name or ios bundle id
  downloadLink: z.string().optional(),
  redirectUrls: z.array(z.string()),
})
