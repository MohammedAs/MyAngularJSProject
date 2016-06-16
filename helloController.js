/**
 * Created by asbanu on 6/13/2016.
 */
myApp.controller('myCtrl', function($scope){
    $scope.sortorder="";
    $scope.upvoteSession=function (blog) {
        blog.voteCount++;
    }
    $scope.directorSearch="";
    $scope.blogs=[
        {
            movie:"Rab Ne Bana Di Jodi",
            director:"Aditya Chopra",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tincidunt arcu. Quisque eu fermentum ligula, id scelerisque dolor. Quisque placerat maximus turpis, a dignissim sem pretium sit amet. Fusce vel ullamcorper lectus. Integer a risus at massa tempus dignissim. Pellentesque in sapien semper nunc aliquet posuere. Sed vulputate sagittis.",
            image: "../images/jodi.jpg",
            date:new Date('09/10/2015'),
            voteCount:15
        },
        {
            movie:"Chennai Express ",
            director:"Rohit Shetty",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tincidunt arcu. Quisque eu fermentum ligula, id scelerisque dolor. Quisque placerat maximus turpis, a dignissim sem pretium sit amet. Fusce vel ullamcorper lectus. Integer a risus at massa tempus dignissim. Pellentesque in sapien semper nunc aliquet posuere. Sed vulputate sagittis.",
            image: "../images/Chennai--621x414.jpg",
            date:new Date('04/25/2011'),
            voteCount:32
        },
        {
            movie:"Prem Ratan Dhan Payo",
            director:"Suraj R.Bharjatya",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tincidunt arcu. Quisque eu fermentum ligula, id scelerisque dolor. Quisque placerat maximus turpis, a dignissim sem pretium sit amet. Fusce vel ullamcorper lectus. Integer a risus at massa tempus dignissim. Pellentesque in sapien semper nunc aliquet posuere. Sed vulputate sagittis.",
            image: "../images/PRDP.jpg",
            date:new Date('12/05/2013'),
            voteCount:22
        }
    ]
})