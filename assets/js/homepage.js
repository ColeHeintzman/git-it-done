var getUserRepos = function() {
    fetch("https://api.github.com/users/octat/repos");
};

getUserRepos();