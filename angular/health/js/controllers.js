angular.module('app.controllers', [])

.controller('LoginCtrl', ['$rootScope', '$scope', '$state', 'localStorageService', 'AuthenticationService', 
    function($rootScope, $scope, $state, localStorageService, AuthenticationService) {

    //If user is already logged in take them to dashboard
    var user = localStorageService.get('user');

    if (user) {
        $rootScope.user  = JSON.parse(user);
        $state.go("dashboard");
    }

    $scope.loginDo = function(login) {
        if (login.phone !== '' && login.pin !== '') {
            // localStorageService.set('uid', 123);
            // $state.go("dashboard");
            AuthenticationService.Login(login.phone, login.pin, function(data){
                if(data.error) {

                } else {
                    $rootScope.user = data;
                    localStorageService.set('user', JSON.stringify(data));
                    $state.go("dashboard");
                }
            });
        }
    };

}])

.controller('DashCtrl', function($scope) {


})

.controller('AppointmentsCtrl', function($scope) {


})

.controller('ContactsCtrl', function($scope) {


})

.controller('PresciptionsCtrl', function($scope) {


});
