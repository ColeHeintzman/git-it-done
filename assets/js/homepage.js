var getUserRepos = function(user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
    fetch(apiUrl).then(function(response){
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var formSubmitHandler = function(event) {
    event.preventDefault();
    var username = nameInputEl.value.trim();
    if (username) {
        getUserRepos (username);
        nameInputEl.value = "";
    }
        else {
            alert("Please enter a GiHub username");
        }
    console.log(event);
};

userFormEl.addEventListener("submit", formSubmitHandler);

var displayRepos = function(repos, searchTerm) {
    console.log(repos);
}