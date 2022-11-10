import { createApp } from 'vue';
import * as Sentry from '@sentry/vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

Sentry.init({
  app,
  dsn: 'https://346d96431c6248b29e0db34887108256@o4504089687752704.ingest.sentry.io/4504089689587712',
  autoSessionTracking: false,
  tracesSampleRate: 1.0,
});

app.use(store).use(router).mount('#app');
