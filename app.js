angular.module('AngularTest', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('AngularTest').config(function($stateProvider, $urlRouterProvider) {

    

    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'partial/projects/projects.html'
    });
    $stateProvider.state('posts', {
        url: '/posts',
        templateUrl: 'partial/posts/posts.html'
    });
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'partial/about/about.html'
    });
    $stateProvider.state('Inquiries', {
        url: '/inquiries',
        templateUrl: 'partial/Inquiries/Inquiries.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/projects');

});

angular.module('AngularTest').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
