import { nodeProfilingIntegration } from '@sentry/profiling-node';
import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://f6874e386a37138b5afe0e36eaf7abed@o4507575940743168.ingest.de.sentry.io/4509262180778064",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  profilesSampleRate: 1.0, // profile every transaction
});
