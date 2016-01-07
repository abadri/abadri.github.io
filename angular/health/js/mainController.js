var app = angular.module("app", ['ionic']);

app.controller('AppCtrl', function($scope) {
    //  $scope.data={};
    var called = ({
        number: 4087234581,
        name: "Doctor Mark "
    });
    var medicine = ({
        name: "tylenol",
        dosage: 1,
        time: "02:30 pm"
    });
    var appointment = ({
        docName: "Doctor 2",
        hospitalName: "hospital 2",
        location: "1567 newhear locaton sanjose ca 95145",
        date: "05-03-2016",
        time: "5:30 am",
        description: "issue 2.",
        patientName: "patient 2"
    });

    $scope.name = "Allan",
        $scope.recentcaller = called,
        $scope.upcomingmedicine = medicine,
        $scope.upcomingappointment = appointment

});


app.controller('Caller', function($scope) {
    var doctorDetails = [{
        name: "hello",
        phonenumber: 123
    }, {
        name: "hello1",
        phonenumber: 1234
    }];
    //  $scope.data={};
    $scope.doc = doctorDetails;
});

app.controller('medicinelist', function($scope) {
    $scope.drug = [{
        name: "tylenol",
        dosage: 1
    }, {
        name: "Acetaminophen",
        dosage: 2
    }];

});

app.controller('appointmentcontroller', function($scope) {
    $scope.appointments = [{
        docName: "Doctor 1",
        hospitalName: "hospital 1",
        location: "location 1",
        date: "01-05-2016",
        time: "time",
        description: "issue 1.",
        patientName: "patient 1"
    }, {
        docName: "Doctor 2",
        hospitalName: "hospital 2",
        location: "1567 newhear locaton sanjose ca 95145",
        date: "05-03-2016",
        time: "5:30 am",
        description: "issue 2.",
        patientName: "patient 2"
    }, {
        docName: "Doctor 3",
        hospitalName: "hospital 3 location 3 location 3 location 3 location 3 location 3location 3",
        location: "location 3",
        date: "01-01-2016",
        time: "12:00 am",
        description: "issue 3.",
        patientName: "patient 3"
    }];
});

// .config(function ContentController($scope, $ionicSideMenuDelegate) {
//   $scope.toggleLeft = function() {
//     $ionicSideMenuDelegate.toggleLeft();
//   };
// });
angular.bootstrap(document, ['app']);
//angular.bootstrap(document, [callcontact]);
