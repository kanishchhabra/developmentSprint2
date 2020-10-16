var CACHE_TITLE = 'developmentSprint2';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
    '/developmentSprint2/',
    '/developmentSprint2/index.html',

    '/developmentSprint2/html/post.html',
    '/developmentSprint2/html/projects.html',

    '/developmentSprint2/css/style.css',

    '/developmentSprint2/developmentSprint2/js/firebase_projects.js',
    '/developmentSprint2/js/firebase.js',
    '/developmentSprint2/js/script_capture.js',
    '/developmentSprint2/js/script_filter_projects.js',
    '/developmentSprint2/js/script_filter.js',
    '/developmentSprint2/js/script_fudge.js',
    '/developmentSprint2/js/sw_register.js',
    '/developmentSprint2/js/manifest.json',
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Adding offline functionality
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});