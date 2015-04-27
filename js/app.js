if ('serviceWorker' in navigator) {
  console.log('supported');
  navigator.serviceWorker.register('service-worker.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
} else {
  console.log('unsupported');
}