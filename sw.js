var CACHE_TITLE = 'my-site-cache';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
    'kanishchhabra.github.io/kanishchhabra.github.io/developmentSprint2/',
    'kanishchhabra.github.io/kanishchhabra.github.io/developmentSprint2/index.html',

    'kanishchhabra.github.io/developmentSprint2/html/post.html',
    'kanishchhabra.github.io/developmentSprint2/html/projects.html',

    'kanishchhabra.github.io/developmentSprint2/css/style.css',

    'kanishchhabra.github.io/developmentSprint2/js/firebase_projects.js',
    'kanishchhabra.github.io/developmentSprint2/js/firebase.js',
    'kanishchhabra.github.io/developmentSprint2/js/script_capture.js',
    'kanishchhabra.github.io/developmentSprint2/js/script_filter_projects.js',
    'kanishchhabra.github.io/developmentSprint2/js/script_filter.js',
    'kanishchhabra.github.io/developmentSprint2/js/script_fudge.js',
    'kanishchhabra.github.io/developmentSprint2/js/sw_register.js',

    'kanishchhabra.github.io/developmentSprint2/icons/comments.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/cross.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/direct.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/discover.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/filter.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/image.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/like.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/newsfeed.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/options.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/pin.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/plus.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/profile.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/projects.svg',
    'kanishchhabra.github.io/developmentSprint2/icons/star.svg',
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