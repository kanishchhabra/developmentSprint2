var CACHE_NAME = 'developmentSprint2';
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

    '/developmentSprint2/icons/comments.svg',
    '/developmentSprint2/icons/cross.svg',
    '/developmentSprint2/icons/direct.svg',
    '/developmentSprint2/icons/discover.svg',
    '/developmentSprint2/icons/filter.svg',
    '/developmentSprint2/icons/image.svg',
    '/developmentSprint2/icons/like.svg',
    '/developmentSprint2/icons/newsfeed.svg',
    '/developmentSprint2/icons/options.svg',
    '/developmentSprint2/icons/pin.svg',
    '/developmentSprint2/icons/plus.svg',
    '/developmentSprint2/icons/profile.svg',
    '/developmentSprint2/icons/projects.svg',
    '/developmentSprint2/icons/star.svg',
    '/developmentSprint2/icons/stufy.png',
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