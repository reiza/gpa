'use strict';

angular.module('gpaApp')
  .factory('gradePointsCalculator', function () {
    // Service logic

    function calculate (qualityHours, qualityPoints) {
      var gradePoints = 0;
      if(qualityHours && qualityPoints){
        // qualityHours * qualityPoints
        gradePoints = new Big(qualityHours).times(qualityPoints);
        gradePoints = gradePoints.toFixed(2);
        // console.log(gradePoints);
      }
      else{
        gradePoints = 0.00;
      }
      return gradePoints;
    }

    // Public API here
    return {
      calculateGradePoints: function (qualityHours, qualityPoints) {
        var gradePoints = calculate (qualityHours, qualityPoints);
        return gradePoints;
      }
    };
  });
