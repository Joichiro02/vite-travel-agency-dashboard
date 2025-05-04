import * as Sentry from "@sentry/react-router";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

Sentry.init({
	dsn: "https://f6874e386a37138b5afe0e36eaf7abed@o4507575940743168.ingest.de.sentry.io/4509262180778064",

	// Adds request headers and IP for users, for more info visit:
	// https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
	sendDefaultPii: true,

	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.replayIntegration(),
	],
	tracesSampleRate: 1.0, //  Capture 100% of the transactions
	// Set `tracePropagationTargets` to declare which URL(s) should have trace propagation enabled
	tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/],
	// Capture Replay for 10% of all sessions,
	// plus 100% of sessions with an error
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
});

startTransition(() => {
	hydrateRoot(
		document,
		<StrictMode>
			<HydratedRouter />
		</StrictMode>,
	);
});
