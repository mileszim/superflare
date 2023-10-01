/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />
/// <reference types="@cloudflare/puppeteer" />

import type { SuperflareAppLoadContext } from "@superflare/remix";

declare module "@remix-run/server-runtime" {
  export interface AppLoadContext extends SuperflareAppLoadContext<Env> {}
}
