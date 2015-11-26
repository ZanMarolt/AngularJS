angular.module('AngularTest').controller('ProjectsCtrl',function($scope, $modal){

	$scope.projects = [

	{
		_id:'3982874563287651',
		category:'Web Development',
		title:'My Project',
		description:'My project description',
		dateTime:Date.now(),
		isPublished:true,
		image:'http://www.online-image-editor.com//styles/2014/images/example_image.png'
	},
	{
		_id:'3982874563287652',
		category:'Web Development',
		title:'My Project 2',
		description:'My project description',
		dateTime:Date.now(),
		isPublished:true,
		image:'http://www.online-image-editor.com//styles/2014/images/example_image.png'
	},
	{
		_id:'3982874563287653',
		category:'Web Development',
		title:'My Project 3',
		description:'My project description',
		dateTime:Date.now(),
		isPublished:false,
		image:'http://www.online-image-editor.com//styles/2014/images/example_image.png'
	}

	];
	
	$scope.removeProject = function(projectId) {

		for(var i=0;i<$scope.projects.length;i++){

			if(projectId === $scope.projects[i]._id){
				$scope.projects.splice(i,1);
			}
		}

	};

	$scope.editProject = function()  {

		var modalInstance = $modal.open({
	      animation: true,
	      templateUrl: 'partial/modal-project/modal-project.html',
	      controller: 'ModalProjectCtrl',
	      size: 'lg',
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });


	};

});