import { LuvaEnv } from "./envSchema"

export function parseEnv(env: Record<string, unknown>) {
  const luvabaseEnv = LuvaEnv.parse(env)
  return luvabaseEnv
}
