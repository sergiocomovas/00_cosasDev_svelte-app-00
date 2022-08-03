import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    sergio: 'Sergio',
  },
});

export default app;
