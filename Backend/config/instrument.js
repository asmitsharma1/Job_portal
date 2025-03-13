// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://3325603cbef38be56a6e1e4b4e3dcb79@o4508969691447296.ingest.us.sentry.io/4508969710125056",
  integrations:[
    Sentry.mongooseIntegration()
  ],
});