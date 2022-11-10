import { createApp } from 'vue';
import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

Sentry.init({
  app,
  dsn: 'https://346d96431c6248b29e0db34887108256@o4504089687752704.ingest.sentry.io/4504089689587712',
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'sergienkonikita.github.io', /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(store).use(router).mount('#app');
