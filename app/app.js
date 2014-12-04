/**
 * Created by mariaturzynska on 12/3/14.
 */
angular.module('app',[])
    .filter('nativesort',function(){
        return function(input,option){
                input.sort(function(a,b){

                    if(a.text > b.text){
                        return 1;
                    }
                    if(a.text < b.text){
                        return -1;
                    }
                    return 0;
                });
            return input;

        }
    })
    .controller('appCtrl',['$scope',function($scope){
        $scope.listName='Todo';
        $scope.renameList=function(){
            if($scope.newListName){
                $scope.listName=$scope.newListName;
            }
            return;
        };
    }])

    .controller('todoCtrl',['$scope',function($scope){
        $scope.newTodo='';
        $scope.todos=[
            {text:"learn angular", done:true},
            {text:'learn backbone', done:true},
            {text:'debug with Jasmin',done:false},
            {text:'work in angular',done:false}
        ];

        $scope.addTodo=function(){
            $scope.todos.push({text:$scope.newTodo,done:false});
            $scope.newTodo="";
        };

        $scope.remaining=function(){
            var count=0;
            angular.forEach($scope.todos,function(todo){
                count +=todo.done ? 0 : 1;
            });

            return count;
        };
    }]);


