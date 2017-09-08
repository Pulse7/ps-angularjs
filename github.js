(function () {
    var github = function ($http) {
        var getUser = function (userName) {
            return $http.get("https://api.github.com/users/" + userName)
                .then(response => response.data);
        };
        var getRepos = function (user) {
            return $http.get(user.repos_url)
                .then(response=>response.data);
        };
        var getRepoDetails = function(username,reponame){
            var repo;
            var repoUrl = "https://api.github.com/repos/"+username+"/" + reponame;

            return $http.get(repoUrl)
                .then(response=>{
                    repo = response.data;
                    return $http.get(repoUrl + "/contributors");
                })
                .then(function(response){
                    repo.collaborators = response.data;
                    return repo;
                })
        }
        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails
        };
    }

    var module = angular.module("githubViewer");
    module.factory("github", github);
})()