angular.module('app', [])
    .controller('UserController', ['$scope', '$rootScope',
 function ($scope, $rootScope) {
            var TemperatureMonitor = {};
            TemperatureMonitor.recordTemperature = function (temp) {

                if ((temp.length === 0)) {
                    $scope.isNull = false;
                    $scope.isValid = true;
                    return;
                } else if (isNaN(temp)) {
                    $scope.isValid = false;
                    $scope.isNull = true;
                    return;
                } else {
                    $scope.temps.push(Number(temp));
                    $scope.temp = "";
                    $scope.isValid = true;
                    $scope.isNull = true;
                }
            };
            TemperatureMonitor.getCurrentMedian = function (tempsArray) {
                if (tempsArray.length == 0) {
                    return;
                }
                tempsArray.sort(function (a, b) {
                    return a - b;
                });
                var allTemps = tempsArray;
                var retValue;
                var index = Math.floor(allTemps.length / 2);
                var len = allTemps.length % 2;
                if (len === 0) {
                    var a = Number(allTemps[index - 1]);
                    var b = Number(allTemps[index]);
                    //alert(a+"avsjh" +b);
                    retValue = (a + b) / 2;

                } else {
                    var i = Math.floor(index);
                    retValue = Number(allTemps[i]);
                }
                return retValue;

            };
            $scope.temps = [];
            $scope.medianTemp = '';
            $scope.temp = "";
            $scope.isValid = true;
            $scope.isNull = true;
            $scope.addTemp = function () {
                TemperatureMonitor.recordTemperature($scope.temp);
            };
            $scope.getMedianTemp = function () {
                $scope.medianTemp = TemperatureMonitor.getCurrentMedian($scope.temps);
            };
}])