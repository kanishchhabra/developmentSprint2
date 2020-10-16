if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
<<<<<<< HEAD
        navigator.serviceWorker.register('../developmentSprint2/sw.js').then(function (registration) {
=======
        navigator.serviceWorker.register('../sw.js').then(function (registration) {
>>>>>>> 5c5163a99bea7371cf637fcf07bd4a59ec632690
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}