var CACHE_TITLE = 'my-site-cache';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
    '/',
    '/index.html',

    '/html/post.html',
    '/html/projects.html',

    '/css/style.css',

    '/js/firebase_projects.js',
    '/js/firebase.js',
    '/js/script_capture.js',
    '/js/script_filter_projects.js',
    '/js/script_filter.js',
    '/js/script_fudge.js',
    '/js/sw_register.js',

    '/icons/comments.svg',
    '/icons/cross.svg',
    '/icons/direct.svg',
    '/icons/discover.svg',
    '/icons/filter.svg',
    '/icons/image.svg',
    '/icons/like.svg',
    '/icons/newsfeed.svg',
    '/icons/options.svg',
    '/icons/pin.svg',
    '/icons/plus.svg',
    '/icons/profile.svg',
    '/icons/projects.svg',
    '/icons/star.svg',
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    console.log("in the fetch");
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});