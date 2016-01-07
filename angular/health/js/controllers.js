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
    
    // $scope.appointmentInfo = appointmentInfo;
    // $scope.prescriptionInfo = prescriptionInfo;
    // $scope.contactInfo = contactInfo;

})

.controller('AppointmentsCtrl', function($scope, appointmentInfo) {
    $scope.appointmentInfo = appointmentInfo;

    $scope.addAppointment = function(apt) {
        console.log(apt);
    };

})

.controller('ContactsCtrl', function($scope, contactInfo) {
    $scope.contactInfo = contactInfo;

    $scope.saveContact = function(contact) {
        console.log(contact);
    };

})

.controller('PresciptionsCtrl', function($scope, prescriptionInfo) {
    $scope.prescriptionInfo = prescriptionInfo;

    $scope.saveDrug = function(drug) {
        console.log(drug);
    };

});
