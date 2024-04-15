
// Function to filter the repositiries with more than 5 stars
function filterRepositoriesWithMoreThanFiveStars(repositories) {
    return repositories.filter(repo => repo.stargazers_count > 5);
}


module.exports = {
    filterRepositoriesWithMoreThanFiveStars
  };


