import { getOptionalEnv } from "@/lib/env";

export function verifyInternalApiToken(request: Request): boolean {
  const expectedToken = getOptionalEnv("BN49_ADMIN_API_TOKEN");

  if (!expectedToken) {
    return false;
  }

  const authorization = request.headers.get("authorization");

  return authorization === `Bearer ${expectedToken}`;
}
