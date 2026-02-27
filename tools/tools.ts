import { writeFile } from "fs/promises"
import { AppManifest } from "../src/manifestSchema"

export async function generateManifestJsonSchema() {
  const schema = AppManifest.toJSONSchema()
  await writeFile("dist/manifest-schema.json", JSON.stringify(schema, null, 2))
}
