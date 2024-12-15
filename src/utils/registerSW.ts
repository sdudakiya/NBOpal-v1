import { registerSW as registerVitePWA } from 'virtual:pwa-register';

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    registerVitePWA({
      onNeedRefresh() {
        if (confirm('New content available. Reload?')) {
          window.location.reload();
        }
      },
      onOfflineReady() {
        console.log('App ready to work offline');
      },
    });
  }
}