
/*
 [1, [2, [
     [3, 4], 5
 ], 6]] == [1, 2, 3, 4, 5, 6];
*/
 var flatten = function(arr, resultArr) {
     var result = resultArr || [];
     for (var i = 0; i < arr.length; i++) {
         if (Array.isArray(arr[i])) {
             flatten(arr[i], result);
         } else {
             result.push(arr[i]);
         }
     }
     return result;
 };
