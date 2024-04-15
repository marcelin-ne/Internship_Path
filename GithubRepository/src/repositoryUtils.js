
// Function to filter the repositiries with more than 5 stars
function filterRepositoriesWithMoreThanFiveStars(repositories) {
    return repositories.filter(repo => repo.stargazers_count > 5);
}


function getLastFiveUpdatedRepositories(repositories) {
    //Sort the repositories desc by date
    const sortedRepositories = repositories.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    // Ttake de last 5 repositories
    return sortedRepositories.slice(0, 5);
}


module.exports = {
    filterRepositoriesWithMoreThanFiveStars,
    getLastFiveUpdatedRepositories
};


