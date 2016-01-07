var app = angular.module("app", ['ionic', 'LocalStorageModule', 'app.controllers', 'app.services', 'app.config']);

app.config(function(localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('MyHeathApp');
});

//Ionic default code
app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});


//Place to configure routes for the app.
app.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

    $stateProvider

        .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })

    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'templates/dashboard.html',
        controller: 'DashCtrl'
    })

    .state('appointments', {
        url: '/appointments',
        templateUrl: 'templates/appointments.html',
        controller: 'AppointmentsCtrl'
    })

    .state('appointments.list', {
        url: '/list',
        templateUrl: 'templates/appointments-list.html',
        controller: 'AppointmentsCtrl'
    })

    .state('appointments.add', {
        url: '/add',
        templateUrl: 'templates/add-appointments.html',
        controller: 'AppointmntsCtrl'
    })

    .state('contacts', {
        url: '/contacts',
        templateUrl: 'templates/contacts.html',
        controller: 'ContactsCtrl'
    })

    .state('contacts.list', {
        url: '/list',
        templateUrl: 'templates/contacts-list.html',
        controller: 'ContactsCtrl'
    })

    .state('contacts.add', {
        url: '/add',
        templateUrl: 'templates/contacts-add.html',
        controller: 'ContactsCtrl'
    })

    .state('presciptions', {
            url: '/presciptions',
            templateUrl: 'templates/presciptions.html',
            controller: 'PresciptionsCtrl'
        })
        .state('presciptions.list', {
            url: '/list',
            templateUrl: 'templates/presciptions-list.html',
            controller: 'PresciptionsCtrl'
        })
        .state('presciptions.add', {
            url: '/add',
            templateUrl: 'templates/presciptions-add.html',
            controller: 'PresciptionsCtrl'
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

});
