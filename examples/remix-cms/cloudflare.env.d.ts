/// <reference types="@cloudflare/workers-types" />

/**
 * This is only used in Workers mode.
 */
declare module "__STATIC_CONTENT_MANIFEST" {
  const value: string;
  export default value;
}

declare const process: {
  env: {
    NODE_ENV: "development" | "production";
  };
};

interface Env {
  /**
   * Only used in Workers mode.
   */
  __STATIC_CONTENT: string;

  DB: D1Database;
  REMIX_CMS_MEDIA: R2Bucket;
  APP_KEY: string;
  QUEUE: Queue;
  CHANNELS: DurableObjectNamespace;
  BROWSER: BrowserWorker;
}
