(function() {
  angular.module("simpleChatApplication").controller("FirstController",FirstController);
function FirstController($scope){
     $scope.messages=[];
     $scope.text='';
     $scope.addNewMessage = addNewMessage;

        function addNewMessage(){

          $scope.messages.push($scope.text);
     };
   };
})();
